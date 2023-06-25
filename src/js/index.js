
// function 与 ()=> 区别在于取值this指向
function moreFunction(e) {
  return {
    timeFormat: (time) => {
      // 判断是否传入时间，否则取此刻时间
      // 格式 xxxx-xx-xx 或 xxxx-xx-xx xx:xx:xx
      const thisTime = time ? (new Date(time)) : (new Date());
      return {
        //不满两位补0 
        fillIn: (val) => {
          return val < 10 ? '0' + val : val
        },
        getYear: function () {
          return thisTime.getFullYear()
        },
        getMonth: function () {
          return this.fillIn(thisTime.getMonth() + 1)
        },
        getNo: function () {
          return this.fillIn(thisTime.getDate())
        },
        getTime: function () {
          return thisTime.getTime()
        },
        getH: function () {
          return this.fillIn(thisTime.getHours())
        },
        getM: function () {
          return this.fillIn(thisTime.getMinutes())
        },
        getS: function () {
          return this.fillIn(thisTime.getSeconds())
        },
        getSlantDate: function () {
          return `${this.getYear()}/${this.getMonth()}/${this.getNo()} ${this.getH()}:${this.getM()}:${this.getS()}`
        },
        getAcrossDate: function () {
          return `${this.getYear()}-${this.getMonth()}-${this.getNo()} ${this.getH()}:${this.getM()}:${this.getS()}`
        },
        getDayCount: function () {
          return new Date(this.getYear(), this.getMonth(), 0).getDate()
        },
        getDay: function () {
          return thisTime.getDay()
        }
      }
    },
    //秒转时分秒
    convertSecondsToHMS: (seconds) => {
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds % 3600) / 60);
      var remainingSeconds = Math.floor(seconds % 60);

      var result = {
          h:'00',
          m:'00',
          s:'00',
      };
      result.h = hours < 10 ? '0' + hours : hours;
      result.m = minutes < 10 ? '0' + minutes : minutes;
      result.s = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
      return result;
    },
    arrFormat: () => {
      return {
        getDeleteRepeat: (arr1) => {
          return [...new Set(arr1)]
          // return Array.from(new Set(arr1))
          // return arr1.reduce((pre, cur) => {
          //   return pre.includes(cur) ? pre : pre.concat(cur);
          // }, [])
        },
        // 从大到小倒序排列>
        getSort: (arr1, fu) => {
          return arr1.sort((a, b) => { return fu === '>' ? b - a : a - b })
        },
        // key数组对象匹配值时传入
        getMatch: (arr1, val, key) => {
          for (let i = 0; i < arr1.length; i++) {
            if (!!key && arr1[i][key] === val) {
              return true
            }
            if (arr1[i] === val) {
              return true
            }
          }
          return false
        },
        // 多维数组扁平一维[1, [2, [3, 4]], [5, 6], [7]]
        getFlatten: function (arr1) {
          return arr1.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? this.getFlatten(cur) : cur)
          }, [])
        }
      }

    },
    // ("123456",3)金钱加分割逗号
    formatNum: (str, sun) => {
      return str.split('').reverse().reduce((cur, next, index) => {
        return ((index % sun) ? next : (next + ',')) + cur
      })
    },
    // 加减乘除计算精度丢失解决
    jsAccuracy: (sun1, sun2) => {
      return {
        getAddNumber: () => {
          let r1, r2, m;
          try { r1 = sun1.toString().split('.')[1].length; } catch (e) { r1 = 0 }
          try { r2 = sun2.toString().split('.')[1].length; } catch (e) { r2 = 0 }
          m = Math.pow(10, Math.max(r1, r2))
          return Number((sun1 * m + sun2 * m) / m)
        },
        getSubNumber: () => {
          let r1, r2, m, n;
          try { r1 = sun1.toString().split('.')[1].length; } catch (e) { r1 = 0 }
          try { r2 = sun2.toString().split('.')[1].length; } catch (e) { r2 = 0 }
          m = Math.pow(10, Math.max(r1, r2))
          n = (r1 >= r2) ? r1 : r2
          return Number(((sun1 * m - sun2 * m) / m).toFixed(n))
        },
        getMulNumber: () => {
          let m = 0, r1 = sun1.toString(), r2 = sun2.toString();
          try { m += r1.split('.')[1].length; } catch (e) { }
          try { m += r2.split('.')[1].length; } catch (e) { }
          return Number(r1.replace('.', '')) * Number(r2.replace('.', '')) / Math.pow(10, m)
        },
        getDivisionNumber: () => {
          let t1 = 0, t2 = 0, r1, r2, n;
          try { t1 = sun1.toString().split('.')[1].length; } catch (e) { }
          try { t2 = sun2.toString().split('.')[1].length; } catch (e) { }
          r1 = sun1.toString().replace('.', '')
          r2 = sun2.toString().replace('.', '')
          n = (t1 >= t2) ? t1 : t2
          return Number(Number(r1 / r2 * Math.pow(10, t2 - t1)).toFixed(n))
        }
      }
    },
    animaionS: () => {
      return {
        // 数字自增长动画
        numberAutoPlus: (el, option) => {
          option = option || {}
          let $this = document.getElementById(el),
            time = option.time || 1500, //总时长
            finaNum = option.num || 0, //显示数字
            speedControl = option.speedControl || 100, // 倍速
            step = finaNum / (time / speedControl), //30ms增值
            count = 0,
            initial = 0;
          let timer = setInterval(() => {
            count = count + step;
            if (count >= finaNum) {
              clearInterval(timer)
              count = finaNum
            }
            let t = Math.floor(count);
            if (t === initial) return
            initial = t;
            $this.innerHTML = initial
          }, 30)
        }
      }
    },
    myCanvas: () => {
      return {
        clock: (el) => {
          const thisClock = document.getElementById(el);
          const ctx = thisClock.getContext('2d');
          const x = 200, y = 200, r = 150;

          // beginPath开始新路径集合 save保存状态 restore推出最新状态   stroke绘制线 rotate旋转角度 fill填充 arc绘制圆
          window.requestAnimationFrame(function e() {

            ctx.clearRect(-10, 0, ctx.canvas.width, ctx.canvas.height);
            // 获取时间
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            // 12个小时一圈 
            hours = hours > 12 ? hours - 12 : hours;
            let hour = hours + minutes / 60;
            let minute = minutes + seconds / 60;
            ctx.save();

            // 绘制表盘 
            (function drawPanel() {
              const lingrad = ctx.createLinearGradient(r, 0, -r, 0);
              lingrad.addColorStop(0, '#242f37');
              lingrad.addColorStop(1, '#48585c');
              ctx.fillStyle = lingrad;
              ctx.beginPath();
              ctx.arc(x, y, r, 0, Math.PI * 2, true)
              ctx.fill();
            }());


            // 绘制12等分刻度时
            (function scale12() {
              ctx.translate(x, y);
              ctx.strokeStyle = "#999";
              ctx.lineWidth = 3;
              for (let i = 0; i < 12; i++) {
                ctx.beginPath();
                ctx.rotate(Math.PI / 6);
                ctx.moveTo(r - 10, 0);
                ctx.lineTo(r - 30, 0);
                ctx.stroke()
              }

            }());

            // 绘制60等分刻度分秒
            (function scale60() {
              ctx.strokeStyle = "red";
              ctx.lineWidth = 2;
              for (let i = 0; i < 60; i++) {
                if (i % 5 !== 0) {
                  ctx.beginPath();
                  ctx.moveTo(r - 10, 0);
                  ctx.lineTo(r - 20, 0);
                  ctx.stroke()
                }
                ctx.rotate(Math.PI / 30)
              }
            }());

            // 绘制刻度文字
            (function scaleText() {
              const timeText = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
              ctx.fillStyle = 'red';
              ctx.font = 'bold 20px Arial';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              for (let i = 0; i < timeText.length; i++) {
                // 角度*π/180 = 弧度
                let theta = (i * 30 - 60) * Math.PI / 180
                // xy余弦正弦坐标位置
                let x = r * 0.7 * Math.cos(theta)
                let y = r * 0.7 * Math.sin(theta)
                ctx.fillText(timeText[i], x, y, 20)
              }
            }());


            function drawHand(times, color, option) {
              ctx.save();
              // 绘制指针 偏移了4/1 等分
              const { offset, avg, length1, length2 } = option;
              const rotate = (times - offset) * 2 * Math.PI / avg;
              ctx.beginPath();
              ctx.rotate(rotate);
              ctx.moveTo(-15, -length1);
              ctx.lineTo(-15, length1);
              ctx.lineTo(r * length2, 1);
              ctx.lineTo(r * length2, -1);
              ctx.fillStyle = color;
              ctx.fill()
              ctx.restore();
            }
            drawHand(hour, 'red', { offset: 3, avg: 12, length1: 5, length2: 0.4 })
            drawHand(minute, 'yellow', { offset: 15, avg: 60, length1: 4, length2: 0.7 })
            drawHand(seconds, '#004dff', { offset: 15, avg: 60, length1: 3, length2: 0.9 })


            // 指针小圆
            ctx.restore();
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2, true);
            ctx.fillStyle = 'gray';
            ctx.fill();

            ctx.shadowOffsetX = -14;
            ctx.shadowOffsetY = 10;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 30;


            window.requestAnimationFrame(e)
          })
        },
        circles: (el, { innerColor, outsideColor, sizeR, cont, bottomSize = 15, topSize = 20 }) => {
          const thisClock = document.getElementById(el);
          const ctx = thisClock.getContext('2d');
          const width = ctx.canvas.width;
          const height = ctx.canvas.height;
          let m = 0, s = cont;
          const gradient = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, 50);
          gradient.addColorStop("0", "magenta");
          gradient.addColorStop("0.5", "blue");
          gradient.addColorStop("1.0", "red");


          function deg2Arc(sun) {
            // 2π360°分成100份*sum份
            return Math.PI * 2 / 100 * sun
          }

          function buttomRound() {
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, sizeR, 0, Math.PI * 2, true);
            ctx.lineWidth = bottomSize;
            ctx.strokeStyle = innerColor;
            ctx.stroke()
          }

          function percentText(m) {
            ctx.fillStyle = 'yellow';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(m + '%', width / 2, height / 2)
          }


          function actionRound(m) {
            ctx.save();
            ctx.beginPath();
            // 75为-90°或者270°开始
            ctx.arc(width / 2, height / 2, sizeR, deg2Arc(75), deg2Arc(75) + deg2Arc(m), false);
            ctx.lineWidth = topSize;
            ctx.strokeStyle = outsideColor;
            ctx.lineCap = "round";
            ctx.stroke()
          }

          window.requestAnimationFrame(function e() {
            ctx.clearRect(0, 0, width, height);
            buttomRound();
            percentText(m);
            actionRound(m);
            if (m >= s) return
            m++
            window.requestAnimationFrame(e)
          })


          thisClock.addEventListener('click', function (e) {
            const canvasInfo = thisClock.getBoundingClientRect()

            console.log(ctx.isPointInPath(e.clientX - canvasInfo.left, e.clientY - canvasInfo.top))
          })
        }
      }
    },
    getEquipmentSize: () => {
      return {
        // 网页可见区域宽
        clientWidth: document.body.clientWidth,
        // 网页可见区域高
        clientHeight: document.body.clientHeight,
        // 网页可见区域宽(包括边线的宽)
        offsetWidth: document.body.offsetWidth,
        // 网页可见区域高 (包括边线的宽)
        offsetHeight: document.body.offsetHeight,
        // 网页正文全文宽
        scrollWidth: document.body.scrollWidth,
        // 网页正文全文高
        scrollHeight: document.body.scrollHeight,
        // 网页卷去的高
        scrollTop: document.body.scrollTop,
        // 网页卷去的左
        scrollLeft: document.body.scrollLeft,
        // 网页正文部分上
        screenTop: window.screenTop,
        // 网页正文部分左
        screenLeft: window.screenLeft,
        // 屏幕分辨率的高
        height: window.screen.height,
        // 屏幕分辨率的宽
        width: window.screen.width,
        // 屏幕可用工作区高度
        availHeight: window.screen.availHeight,
        // 屏幕可用工作区宽度
        availWidth: window.screen.availWidth,

      }
    }
  }
}
export default moreFunction
