using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Models
{
    public class Client
    {
        public int cli_id { get; set; }

        public string cli_name { get; set; }

        public string cli_email { get; set; }

        public string cli_address { get; set; }

        public string cli_city { get; set; }

        public string cli_phone { get; set; }
    }
}
