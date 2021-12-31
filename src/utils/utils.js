export default {
    seasonality : false,
    fakePromise() {
         setTimeout( function() {
            let seasonality = false
            seasonality = true
            console.log("fake api call",seasonality)
            return seasonality
            
        },10000)
    },
    fake()
    {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            let seasonality = false
            seasonality = true
          resolve(seasonality);
        }, 7000);
      });
    }

}