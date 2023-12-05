const { createApp } = Vue

  createApp({
    data() {
      return { 
        url:"https://codoacodo2023.pythonanywhere.com/productos",
        productos:[],
        error:false,
        cargando:true
      }
    },
    
    created() {
        this.fetchData(this.url)  
    },
    methods: {
        fetchData(url) {
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        },
        
        eliminar(id) {
            console.log(id);
            const url = 'https://codoacodo2023.pythonanywhere.com/borrar/'+id;
            var options = {
                method: 'DELETE',
                
            }
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')