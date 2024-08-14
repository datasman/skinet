using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class RegisterDto
{
    [Required]
    public string DisplayName { get; set; }


    [Required]
    [EmailAddress]
    public string Email { get; set; }


    [Required]
    [RegularExpression("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$",
    ErrorMessage = "Password must have one uppercase, one lower case, one number, one non alphanumeric and at least six characters")]
    public string Password { get; set; }
}
