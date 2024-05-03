using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// Add services to the container

builder.Services.AddControllers();

// Adding Extensions methods
// Move code to the one class and use that method here

// Add configuration for DB string connection
builder.Services.AddApplicationServices(builder.Configuration);

// Adding JWT Configuration
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// The middleware is very important
// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

// To enable CORS
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
