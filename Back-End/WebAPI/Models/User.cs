using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {
        public int usr_id { get; set; }

        public string usr_first_name { get; set; }

        public string usr_last_name { get; set; }

        public string usr_phone { get; set; }

        public string usr_email { get; set; }

        public string usr_password { get; set; }

        public string usr_role { get; set; }
    }
}
