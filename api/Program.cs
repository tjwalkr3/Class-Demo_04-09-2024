using System.Reflection.Metadata.Ecma335;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(options => {
    options.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
});

List<User> users = [
    new User("User 1", Guid.NewGuid()),
    new User("User 2", Guid.NewGuid()),
    new User("User 3", Guid.NewGuid())
];

app.MapGet("/userAccounts", () => {
    return users;
});

app.MapPost("/addAccount", (UserCreationRequest userRequest) => {
    var newUser = new User(userRequest.UserName, Guid.NewGuid());
    users.Add(newUser);
});

app.Run();

record User(string UserName, Guid Id);

record UserCreationRequest(string UserName);

