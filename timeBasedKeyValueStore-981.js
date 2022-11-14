
var TimeMap = function () {
    this.map = {}
};



/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map[key]) this.map[key] = [];
    this.map[key].push([timestamp, value]);
};



/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map[key]) return ""

    if (timestamp >= this.map[key][this.map[key].length - 1][0]) {
        return this.map[key][this.map[key].length - 1][1]
    } else if (timestamp < this.map[key][0][0]) {
        return ""
    }

    let left = 0
    let right = this.map[key].length

    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        if (this.map[key][middle][0] === timestamp) return this.map[key][middle][1]
        else if (this.map[key][middle][0] < timestamp) left = middle + 1
        else right = middle - 1
    }

    return this.map[key][left][1]
};



/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */