using API.Helpers;
using AutoMapper;
using CompanyEmployees.Dbthings;
using CompanyEmployees.Extensions;
using CompanyEmployees.Feed;
using Entities;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using NLog;
using System.IO;
using System.Text;
using Entities.DTO;
using Microsoft.AspNetCore.SignalR;
using CompanyEmployees.Hubs;
using Entities.DTO;




namespace CompanyEmployees
{
    public class Startup
    {
       
                public Startup(IConfiguration configuration)
        {
            LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var jwtSettings = Configuration.GetSection("JwtSettings");
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = jwtSettings.GetSection("validIssuer").Value,
                    ValidAudience = jwtSettings.GetSection("validAudience").Value,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.GetSection("securityKey").Value))
                };
            });
            services.ConfigureCors();
            services.ConfigureIISIntegration();
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));
            services.AddScoped<JwtHandler>();
            services.AddScoped<IPhotoService, PhotoService>();
            services.ConfigureLoggerService();
            services.ConfigureSqlContext(Configuration);
            services.AddAutoMapper(typeof(Startup));
             services.AddScoped<IUserRepository , UserRepository>();
             services.AddScoped<IMessageRepository , MessageRepository>();
            services.AddIdentity<User, IdentityRole>().AddEntityFrameworkStores<RepositoryContext>();
            services.AddTransient<IPostService, MockPostService>();
            services.AddTransient<IFeedService, FeedService>();
            services.AddControllers();
            services.ConfigureRepositoryWrapper();
            services.AddMvc();
            services.AddSignalR(); 
            services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>{
                builder.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:4200").AllowCredentials();
            }));
            services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseCors("CorsPolicy");

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.All
            });

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<ChatHub>("/chatsocket");
            });
        }
    }
}
