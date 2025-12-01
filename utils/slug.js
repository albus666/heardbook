/**
 * 将文本转换为URL友好的slug格式
 * @param {string} text - 要转换的文本
 * @returns {string} - slug格式的字符串
 * 
 * 示例:
 * "Elon Musk: The Official Biography" -> "elon-musk-the-official-biography"
 * "The 7 Habits of Highly Effective People" -> "the-7-habits-of-highly-effective-people"
 */
export function createSlug(text) {
  if (!text) return ''
  
  return text
    .toLowerCase()
    .trim()
    // 替换所有非字母数字字符（保留空格和连字符）为空格
    .replace(/[^\w\s-]/g, ' ')
    // 将多个空格、下划线或连字符替换为单个连字符
    .replace(/[\s_-]+/g, '-')
    // 移除开头和结尾的连字符
    .replace(/^-+|-+$/g, '')
}

