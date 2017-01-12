function UserService ($http,$q,$log,$localStorage) {  
    return {
        ingresar: ingresar,
        alumnos: alumnos
    }


    function ingresar (data){


        console.log('ingresar...',data)

        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"api-token-auth/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {


        console.log(data)

        $localStorage.token = data.token;

        return promise;

        })


    }


    function alumnos (){

        var defered = $q.defer();

        var promise = defered.promise;

        $http.get(host+'useralumno/')

        .success(function(data) {

        defered.resolve(data);

        })

        return promise

    }


}



