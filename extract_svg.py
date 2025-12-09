#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取 svg.html 文件中的 SVG 图标并保存为独立文件
"""

import os
import re
from bs4 import BeautifulSoup
from xml.dom import minidom

def clean_filename(name):
    """清理文件名：去掉空格和特殊字符，但保留 & 符号"""
    # 去掉 HTML 实体（如 &amp;）
    name = name.replace('&amp;', '&')
    # 去掉所有空格
    name = name.replace(' ', '')
    # 去掉其他特殊字符，只保留字母、数字、连字符、下划线和 & 符号
    name = re.sub(r'[^\w\-\&]', '', name)
    return name

def fix_svg_tags(svg_str):
    """修复 SVG 标签名大小写问题"""
    # 修复 clipPath 标签（开始和结束标签）
    svg_str = re.sub(r'<clippath\b', '<clipPath', svg_str, flags=re.IGNORECASE)
    svg_str = re.sub(r'</clippath\b', '</clipPath', svg_str, flags=re.IGNORECASE)
    # 修复 viewBox 属性
    svg_str = re.sub(r'\bviewbox\s*=', 'viewBox=', svg_str, flags=re.IGNORECASE)
    # clip-path 属性应该保持小写，不需要修改
    return svg_str

def format_svg(svg_str):
    """格式化 SVG 文件"""
    try:
        # 使用 minidom 解析和格式化
        dom = minidom.parseString(svg_str)
        # 格式化输出（缩进）
        formatted = dom.toprettyxml(indent='  ', encoding=None)
        # 移除 XML 声明（如果存在）
        formatted = re.sub(r'<\?xml[^>]*\?>\s*', '', formatted)
        # 移除多余的空行
        lines = [line for line in formatted.split('\n') if line.strip()]
        formatted = '\n'.join(lines)
        # 再次修复标签名（因为 minidom 可能会改变大小写）
        formatted = fix_svg_tags(formatted)
        return formatted
    except Exception as e:
        print(f'警告: 格式化失败，使用原始内容: {e}')
        return svg_str

def extract_svgs_from_html(html_file_path, output_dir):
    """
    从 HTML 文件中提取 SVG 并保存
    
    Args:
        html_file_path: HTML 文件路径
        output_dir: 输出目录路径
    """
    # 读取 HTML 文件
    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 使用 BeautifulSoup 解析
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 找到所有的 <a> 标签
    links = soup.find_all('a', {'data-test-id': 'b-chip'})
    
    print(f'找到 {len(links)} 个分类链接')
    
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    saved_count = 0
    skipped_count = 0
    
    for link in links:
        # 查找 SVG 标签
        svg = link.find('svg')
        if not svg:
            print('警告: 未找到 SVG 标签')
            skipped_count += 1
            continue
        
        # 查找 span 标签获取分类名称
        span = link.find('span')
        if not span:
            print('警告: 未找到 span 标签')
            skipped_count += 1
            continue
        
        category_name = span.get_text(strip=True)
        filename = clean_filename(category_name)
        
        if not filename:
            print(f'警告: 无法生成文件名，跳过分类: {category_name}')
            skipped_count += 1
            continue
        
        # 将 SVG 转换为字符串
        svg_str = str(svg)
        
        # 修复标签名大小写问题
        svg_str = fix_svg_tags(svg_str)
        
        # 格式化 SVG
        svg_str = format_svg(svg_str)
        
        # 保存文件
        output_path = os.path.join(output_dir, f'{filename}.svg')
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(svg_str)
        
        print(f'✓ 已保存: {category_name} -> {filename}.svg')
        saved_count += 1
    
    print(f'\n处理完成!')
    print(f'成功保存: {saved_count} 个文件')
    if skipped_count > 0:
        print(f'跳过: {skipped_count} 个文件')

if __name__ == '__main__':
    # 获取脚本所在目录
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # HTML 文件路径
    html_file = os.path.join(script_dir, 'static', 'img', 'app', 'category', 'svg.html')
    
    # 输出目录
    output_dir = os.path.join(script_dir, 'static', 'img', 'app', 'category')
    
    # 检查文件是否存在
    if not os.path.exists(html_file):
        print(f'错误: 找不到文件 {html_file}')
        exit(1)
    
    # 执行提取
    extract_svgs_from_html(html_file, output_dir)

