(function () {
    var timeSpan = document.getElementsByClassName("main-banner")[0].getElementsByTagName("li")[0].getElementsByTagName("span")[0];
    var startTime = new Date();
    var endTime = new Date();
    function initTime() {
        var nowTime = new Date();
        var hours = nowTime.getHours();
    
        if (hours >= 0 && hours < 10) {
            setEndTime(0, 10)
        } else if (hours >= 10 && hours < 14) {
            setEndTime(10, 4)
        } else if (hours >= 14 && hours < 20) {
            setEndTime(14, 6)
        } else if (hours >= 20 && hours < 22) {
            setEndTime(20, 2)
        } else if (hours >= 22 & hours < 24) {
            setEndTime(22, 2)
        }
    
    }
    
    function setEndTime(start, keep) {
        startTime.setHours(start, 0, 0, 0);
        endTime.setTime(startTime.getTime() + 1000 * 3600 * keep)
    }
    
    function formatTime(time) {
        time = time.toString()
        return time.replace(/^(\d)$/, '0$1')
    }
    
    function timeDown () {
        var nowTime = new Date();
        var surplusHours;
        var surplusMin;
        var surplusSec;
        if (endTime.getHours() == 0) {
            surplusHours = formatTime(23 - nowTime.getHours());
        } else {
            surplusHours = formatTime(endTime.getHours() - nowTime.getHours() - 1);
        }
    
        surplusMin = formatTime(59 - nowTime.getMinutes());
        surplusSec = formatTime(59 - nowTime.getSeconds());
        timeSpan.innerHTML = `抢购中<br>距结束`+ surplusHours + `:` + surplusMin + `:` + surplusSec
    }
    initTime();
    timeDown()
    var timer = setInterval(timeDown, 1000)
})()




