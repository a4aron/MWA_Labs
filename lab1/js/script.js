    const { Observable, from , fromEvent } = rxjs;
    const { map, flatMap, mergeAll, filter, debounceTime } = rxjs.operators;

    var dataPromise = fetch("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json");
    dataPromise.then(data => data.json())
               .then(data => console.log(data))
    
    const btnsearch = document.getElementById('searchButton');
const txtSearch = document.getElementById('searchbox');
var groupcountry;
// btnsearch.addEventListener('click',()=>console.log(searchbox.value))
    const obs = fromEvent(btnsearch, 'click');
    obs
    .pipe(
      debounceTime(200)
    )
    .subscribe(
      ()=>{console.log(txtSearch.value)
      const data$ = Observable.create(observer => {fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
      .then(response => response.json()) // or text() or blob() etc.
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(err => observer.error(err));
       });
      
      data$
          .pipe(
              // filter(alldata => alldata.teams == txtSearch.value),
              map(alldata => alldata.teams)
          )
          .subscribe(data => console.log(data)); 
      }
    );
