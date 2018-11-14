import Parse from 'parse'

const ParseAPI = {
    initParse(){
        Parse.initialize('SYcUtpevhN2d3O9ffsyshUHyxPEdnsThUks1TREX', 'zKOUctDeT3n4ev9w2URR8HP3JeVxjb6U2KhmtOFV');
        Parse.serverURL = 'https://miptagramparse.sabir.pro/parse';
    },
    getFreshObjects(className, objectsMap, filterData, transformFunction = a => a) {
        console.log('   --->>>   getFreshObjects: ' + className);
        
        return new Promise((resolve, reject) => {
            let q = new Parse.Query(className);
            q.limit(100000);
            q.addAscending('createdAt');
            for (let key in filterData){
                let v = filterData[key];
                if (v !== undefined && v.length > 0){
                    for (let j in v){
                        q[key](...v[j]);
                    }
                }
            }
            
            q.find().then((results) => {
                // console.log('objects loaded: objects = ', results);
                let objects = results.map( (m) => {
                    return transformFunction(m);
                });
                // console.log('transformed objects = ', objects);
                resolve(objects);
            }, (err) => {
                reject(err);
            });
        })
    },

    updateObject(className, data, transformFun){
        console.log('updateObject: ' + className, data);
        let self = this;
        let q = new Parse.Query(className);
        return new Promise((resolve, reject) => {
            q.get(data.id, {
                success: (loadedObject) => {
                    for (let key in data){
                        let d = data[key];
                        if (key === 'id' || key === 'timestamp' || key === 'creatorId'){
                            continue;
                        }
                        loadedObject.set(key, data[key]);
                    }
                    loadedObject.save().then((savedObject) => {
                        let obj = transformFun(savedObject);
                        resolve(obj);
                    });
                },
                error: (err) =>{
                    reject(err);
                }
            })
        });
    }

}
export default ParseAPI