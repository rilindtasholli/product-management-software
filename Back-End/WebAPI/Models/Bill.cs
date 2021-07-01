using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Models
{
    public class Bill
    {
        public int bil_id { get; set; }

        public string bil_date { get; set; }

        public double bil_total_price { get; set; }

        public double bil_paid_price { get; set; }

        public double bil_discount { get; set; }

        public string bil_type { get; set; }
        
        public string bil_message { get; set; }

        public int bil_sale { get; set; }


    }
}
