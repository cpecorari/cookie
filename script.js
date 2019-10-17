var cookies = document.getElementsByClassName('cookie');
for(let i=0; i < cookies.length; i++)
{
    cookies[i].addEventListener("click", function() {
        console.log(this);
        if(this.getAttribute('src') == 'cookie-2.jpg')
            this.hidden=true;
        else if(this.getAttribute('src') == 'cookie-1.jpg')
            this.setAttribute('src', 'cookie-2.jpg');
        var count=0;
        for(let j=0; j < cookies.length; j++)
        {
            if(cookies[j].hidden == true)
                count++;
            if(count == cookies.length)
            {
                for(let k=0; k < cookies.length; k++){
                    cookies[k].hidden = false;  
                    cookies[k].setAttribute('src', 'cookie-1.jpg');
                }
            }
        }
    });
};