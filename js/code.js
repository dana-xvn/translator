$(document).ready(function(){
    let earthly = "子;鼠|丑;牛|寅;虎|卯;兔|辰;龍|巳;蛇|午;馬|未;羊|申;猴|酉;雞|戌;狗|亥;豬"
    let earthlyList = earthly.split("|")
    for(let i=0;i<earthlyList.length;i++){
        earthlyList[i] = earthlyList[i].split(";")
        $("ul.transList").append("<li>"+earthlyList[i][0]+' :'+earthlyList[i][1]+"</li>")
    }
    // 字翻譯
    function findCode(letter){
        for(let i=0;i<earthlyList.length;i++){
            if(earthlyList[i][0]===letter){
                return earthlyList[i][1]
            }
        }
        return letter
    }
    // 密碼翻譯
    function findLetter(code){
        for(let i=0;i<earthlyList.length;i++){
            if(earthlyList[i][1]===code){
                return earthlyList[i][0]
            }
        }
        return code
    }

    function translateToEarthly(text){
        text = text.toUpperCase()
        let result = ""
        for(let i=0;i<text.length;i++){
            result+=findCode(text[i])+" "
        }
        return result
    }

    function translateToZodiac(text){
        text = text.split(" ")
        let result = ""
        for(let i=0;i<text.length;i++){
            result+=findLetter(text[i])
        }
        return result
    }
    // 點擊轉換成密碼
    $(".earthlyBtn").click(function(){
        let input = $(".input").val()
        let result = translateToEarthly(input)
        $('.output').val(result)
        // 動畫
        $(".output").css({backgroundColor: "#A2AD91"})
                    .animate({backgroundColor: "#fefefe"},1000)
    })
    // 點擊轉換成文字
    $(".zodiacBtn").click(function(){
        let output = $(".output").val()
        let result = translateToZodiac(output)
        $('.input').val(result)
        // 動畫
        $(".input").css({backgroundColor: "#A2AD91"})
                    .animate({backgroundColor: "#fefefe"},400)
    })
    // 鍵盤輸入按下去 就去除空白
    $('.input').keyup(function(){
        let original = $('.input').val()
        let newText = original.split(" ").join("")
        $('.input').val(newText)
    })
    $('.output').keyup(function(){
        let original = $('.output').val()
        let newText = original.split(" ").join("")
        $('.output').val(newText)
    })
})