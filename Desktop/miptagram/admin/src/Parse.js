import Parse from 'parse'

const ParseAPI = {
    initParse(){
        Parse.initialize('viGHyzWZu8NZZkNvneFvSB5ot0eG6iebLeS2jL7D', 'ruLlVEq1J54FpxJBbkSOlfl9Nk220c6PT6YHCQZp');
        Parse.serverURL = 'https://parseapi.back4app.com/';
    },
    getFreshObjects(className) {
        return( new Promise(function(resolve, reject) {
            setTimeout(() => {
              resolve('a value')
            }, 100)
          })
        )
    }

}
export default ParseAPI