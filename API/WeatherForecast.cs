namespace API;

public class WeatherForecast
{

    private string summary = "";

    public DateOnly Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    public string Summary { 
        get{return summary;}
        set{summary = value;} 
     }
}
