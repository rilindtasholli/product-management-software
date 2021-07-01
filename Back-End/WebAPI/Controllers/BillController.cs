using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using ManagementAPI.Models;

namespace ManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BillController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("Fatura")]

        public JsonResult GetFatura()
        
            
            {
                string query = @"
              select  bil_id, convert(varchar(10), bil_date, 120), bil_total_price as 'PagesaTotale'
            , bil_paid_price as 'ShumaPaguar', bil_discount , bil_total_price-bil_discount as 'ShumaMeZbritje', 
            bil_type, bil_message, bil_sale, sal_id, convert(varchar(10), sal_date, 120), sal_client, cli_id, cli_name, cli_email, cli_address, cli_city, cli_phone
            from Bills b, Sales s, Clients c
            where b.bil_sale = s.sal_id and s.sal_client = c.cli_id ;
                        ";
                            DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
            return new JsonResult(table);
        
        }

        [HttpGet("Borxhlinjte")]

        public JsonResult GetBorxhlinjte()


        {
            string query = @"
          
           select c.cli_id,b.bil_id,c.cli_name, (bil_total_price-bil_discount)- bil_paid_price 'BorxhiIMbetur'
            from Bills b, Sales s, Clients c
            where b.bil_sale = s.sal_id and s.sal_client = c.cli_id ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }

        /*drop down per klientet te cilet kane bere blerje dhe i kemi liru fature*/

        [HttpGet("DropFatura")]

        public JsonResult GetDropFatura()


        {
            string query = @"
          
           select c.cli_name, b.bil_id, s.sal_date
            from Bills b, Clients c, Sales s
            where b.bil_sale = s.sal_id and s.sal_client = c.cli_id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);

        }


        [HttpPost]

        public JsonResult Post(Bill bil)
        {
            string query = @"
                        insert into Bills (bil_date, bil_total_price, bil_paid_price,
                bil_discount, bil_type, bil_message, bil_sale) 
                        values 
                           (
                    '" + bil.bil_date + @"'
                    ,'" + bil.bil_total_price + @"'
                    ,'" + bil.bil_paid_price + @"'
                    ,'" + bil.bil_discount + @"'
                    ,'" + bil.bil_type+ @"'
                    ,'" + bil.bil_message + @"'
                    ,'" + bil.bil_sale + @"'
                    )
                              ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]

        public JsonResult Put(Bill bil)
        {
            string query = @"
                            update Bills set 
                          
                   bil_date = '" + bil.bil_date + @"',
                   bil_total_price ='" + bil.bil_total_price + @"',
                   bil_paid_price = '" + bil.bil_paid_price + @"',
                   bil_discount = '" + bil.bil_discount + @"',
                   bil_type = '" + bil.bil_type + @"',
                   bil_message = '" + bil.bil_message + @"',
                   bil_sale =  '" + bil.bil_sale + @"'
                    where bil_id = " + bil.bil_id + @"
                    
                              ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Bills
                    where bil_id = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ManagementAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

    }
}
