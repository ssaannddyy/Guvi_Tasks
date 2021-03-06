/*I have a mock data of security Questions and Answers.
 You function should take the object and a pair of strings and should return if the quest is present and if its valid answer*/
var securityQuestions = [
 {
 'question': 'What was your first pet’s name?',
 'expectedAnswer': 'FlufferNutter'
 },
 {
 'question': 'What was the model year of your first car?',
 'expectedAnswer': 1985
 },
 {
 'question': 'What city were you born in?',
 'expectedAnswer': 'NYC'
 }
]
// checks the security question and answers
function chksecurityQuestions(securityQuestions,question,answer) 
{
	count=0
	for(var i of securityQuestions)
	{
		if(i['question']===question)
		{
			count++
			if(i['expectedAnswer']===answer)
			{
				return true
			}
			else
			{
				return false
			}
		}
	}
	if (count===0)
	{
		return false
	}
}
//Test case1:
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase