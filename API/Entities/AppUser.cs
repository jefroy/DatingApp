using System;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; } // entity framework recognizes this as the PK !
        public String UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}