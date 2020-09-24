$(document).ready(function(){
    let morseCode = "子;鼠|丑;牛|寅;虎|卯;兔|辰;龍|巳;蛇|午;馬|未;羊|申;猴|酉;雞|戌;狗|亥;豬"
    let morseList = morseCode.split("|")
    for(let i=0;i<morseList.length;i++){
        morseList[i] = morseList[i].split(";")
        $("ul.transList").append("<li>"+morseList[i][0]+' :'+morseList[i][1]+"</li>")
    }
    // 字翻譯
    function findCode(letter){
        for(let i=0;i<morseList.length;i++){
            if(morseList[i][0]===letter){
                return morseList[i][1]
            }
        }
        return letter
    }
    // 密碼翻譯
    function findLetter(code){
        for(let i=0;i<morseList.length;i++){
            if(morseList[i][1]===code){
                return morseList[i][0]
            }
        }
        return code
    }

    function translateToMorse(text){
        text = text.toUpperCase()
        let result = ""
        for(let i=0;i<text.length;i++){
            result+=findCode(text[i])+" "
        }
        return result
    }

    function translateToEng(text){
        text = text.split(" ")
        let result = ""
        for(let i=0;i<text.length;i++){
            result+=findLetter(text[i])
        }
        return result
    }
    // 點擊轉換成密碼
    $(".morseBtn").click(function(){
        let input = $(".input").val()
        let result = translateToMorse(input)
        $('.output').val(result)
        // 動畫
        $(".output").css({backgroundColor: "#A2AD91"})
                    .animate({backgroundColor: "#fefefe"},1000)
    })
    // 點擊轉換成文字
    $(".engBtn").click(function(){
        let output = $(".output").val()
        let result = translateToEng(output)
        $('.input').val(result)
        // 動畫
        $(".input").css({backgroundColor: "#A2AD91"})
                    .animate({backgroundColor: "#fefefe"},400)
    })
    // 鍵盤輸入按下去 就轉大寫跟去除空白
    $('.input').keyup(function(){
        let original = $('.input').val()
        let newText = original.toUpperCase().split(" ").join("")
        $('.input').val(newText)
    })
})