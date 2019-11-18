using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;

namespace AzureSignalRService.Functions
{
    public static class PublishMessage
    {
        [FunctionName("PublishMessage")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [SignalR(HubName = "sendmessage")]IAsyncCollector<SignalRMessage> signalRMessages,
            ILogger log)
        {
            string requestBody = new StreamReader(req.Body).ReadToEnd();

            await signalRMessages.AddAsync(new SignalRMessage()
            {
                Target = "publish",
                Arguments = new object[] { requestBody }
            });

            return new OkResult();
        }
    }
}
