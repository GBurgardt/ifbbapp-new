export class Configuraciones {
    //public static urlBase: string = "http://10.0.0.33:8080/UsuariosREST/ws"; //Test
    public static urlBase: string = "http://localhost:8080/UsuariosREST/ws";  //Produccion
    //public static urlBase: string = "http://localhost:8080/UsuariosREST/ws";//Local
        
    public static authUrl: string = `${Configuraciones.urlBase}/usuarios/`;          
    public static timeoutDefault : number = 30000;  //30 seg    
    public static servicioRss2JsonURL: string = "https://api.rss2json.com/v1/api.json?rss_url=";
}