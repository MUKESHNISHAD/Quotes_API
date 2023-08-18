AOS.init();
    var tar_quotes = document.getElementById('lesson');
    var tar_author = document.getElementById('author');
    var btn = document.getElementById('button');

    const NewQuotes = (Data_obj)=>{
        var rand_no = Math.ceil(Math.random()*10);
        tar_quotes.innerText =`"`+Data_obj[rand_no].text+`"`;
        tar_author.innerText ="~"+Data_obj[rand_no].author
    }
    var Data_obj ="";
    const quotes = async()=>{
        const api = "https://type.fit/api/quotes";
        try{
            var data = await fetch(api);
            Data_obj = await data.json();
            NewQuotes(Data_obj);
        }catch(error){
        }
    }