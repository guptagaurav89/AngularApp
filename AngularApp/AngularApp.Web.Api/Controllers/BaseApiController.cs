using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace AngularApp.Web.Api.Controllers
{
    [RoutePrefix("api/baseapi")]
    public class BaseApiController : ApiController
    {
        [Route("GetVal")]
        [HttpGet]
        public string getVal()
        {
            return "Gaurav";
        }

        protected HttpResponseMessage ToJSON(dynamic obj)
        {
            var respone = Request.CreateResponse(HttpStatusCode.OK);
            respone.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return respone;
        }
    }
}
