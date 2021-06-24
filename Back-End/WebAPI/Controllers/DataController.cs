using ManagementAPI.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace ManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public DataController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet("{date}")]
        public JsonResult GetNumberOfSalesByDate(string date)
        {
            string query = @"select Count(*) as [salesCount] from Sales where sal_date = '" + date + @"'";
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

        [HttpGet("{firstDate}/{secondDate}")]
        public JsonResult GetNumberOfSalesByDates(string firstDate, string secondDate)
        {
            string query = @"select Count(*) as [salesCount] from Sales where sal_date >= '" + firstDate + @"' AND sal_date <= '" + secondDate + @"'";
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

        [HttpGet("recentsales")]
        public JsonResult GetFiveRecentSales()
        {
            string query = @"select top 5 s.sal_id, c.cli_name, c.cli_phone, convert(varchar(10), s.sal_date, 120) as sal_date, subquery.total_price
from Sales s inner join Clients c 
on s.sal_client = c.cli_id inner join (select sp.sal_id, SUM(p.prod_price) as total_price
							from Sales_Products sp, Products p
							group by sal_id
							) as subquery
on subquery.sal_id = s.sal_id
order by sal_date desc";
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




    }
}
