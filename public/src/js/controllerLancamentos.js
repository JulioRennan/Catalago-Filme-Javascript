console.log('file controller ok');
var addAllFilmes=function (year){
  let db = firebase.firestore();
        db.collection("lancamentos").doc(year).get().then((doc)=>{ 
            let filmes = doc.data()['filmes'];
            filmes.forEach((f)=>{
                let section = document.createElement('section');
                section.innerHTML=`
                <div class="card-header">
                    <div class="card-img">
                        <img src="${f.url_img}" alt="">
                    </div>
                </div>
                <div class="card-footer">
                <h1>
                    ${f.nome}
                </h1>
                </div>`;
                section.setAttribute('class','card');
                document.querySelector('main').appendChild(section);
            })
        });
}
