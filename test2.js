function longestSubstring(s) {
    if (!s) return 0;

    let maxLength = 0;
    let start = 0;
    let end = 0;
    const seen = new Set();

    while (end < s.length) {
        if (!seen.has(s[end])) {
            seen.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            seen.delete(s[start]);
            start++;
        }
    }

    return maxLength;
}

module.exports = { longestSubstring };


