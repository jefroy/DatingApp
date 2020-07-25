using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {

        }

        public DbSet<Value> Values { get; set; } // Values is the table name in the db
        public DbSet<User> Users { get; set; } // add users to db
    }
}