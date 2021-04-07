namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string details = null, string message = null)
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }
        
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
        
    }
}