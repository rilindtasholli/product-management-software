using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ManagementAPI.Models
{
    public class Employee
    {
        public int emp_id { get; set; }

        public string emp_name { get; set; }

        public string emp_phone { get; set; }

        public string emp_email { get; set; }

        public decimal emp_hourly_wage { get; set; }

        public decimal emp_hours { get; set; }
    
    }
}
