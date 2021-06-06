using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ManagementAPI.Models
{
    public class Employee
    {
        public int Emp_id { get; set; }

        public string Emp_name { get; set; }

        public string Emp_phone { get; set; }

        public string Emp_email { get; set; }

        public decimal Emp_hourly_wage { get; set; }

        public decimal Emp_hours { get; set; }
    
    }
}
