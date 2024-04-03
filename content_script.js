const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i<text.length; i++){
    if (text[i].innerHTML.includes('circle back')){
        text[i].innerHTML = text[i].innerHTML.replace('circle back', 'waste more time')
    }
    else if (text[i].innerHTML.includes('surge support')){
        text[i].innerHTML = text[i].innerHTML.replace('surge support', 'unpaid overtime')
    }
    else if (text[i].innerHTML.includes('take this offline')){
        text[i].innerHTML = text[i].innerHTML.replace('take this offline', 'talk privately')
    }
    else if (text[i].innerHTML.includes('touch base')){
        text[i].innerHTML = text[i].innerHTML.replace('touch base', 'talk')
    }
}