function symbolCheck(symbol){
    switch (symbol)
    {
        case '+':
            return true;
        case '-':
            return true;
        case '*':
            return true;
        case '/':
            return true;

        default:
            return false;
    }
}
function expressionCheck(expression){
    let ans = true;
    let stack1= [];
    let stack2= [];

    for(let i = 0; i < expression.length; i++){
        if ((expression[i] < '0' && expression[i] > '9') && !symbolCheck(expression[i]))
        {
           ans = false;
           break;
        }
        else if((expression[i] >= '0' && expression[i] <= '9')){

            stack1.push(expression[i]);
        }
        else if(symbolCheck(expression[i]) && expression[i] !== ')'){
            if(i === 0 || symbolCheck(expression[i-1]) === true){
                ans = false;
                break;
            }
            stack2.push(expression[i]);
        }
        else if(expression[i] === ')'){
            while(stack2[stack2.length-1] !== '('){
                if(stack2.length === 0){
                    ans = false;
                    break;
                }
                stack2.pop();
                if(stack1.length < 2){
                    ans = false;
                    break;
                }

                stack1.pop();
                stack1.pop();

            }
            stack2.pop();
        }
    }

    return ans;
}
function Evaluate(expression)
{

    if(expressionCheck(expression)===false)
        return ("Invalid Expression ");
    let tokens = expression.split('');

    // Stack for numbers: 'values'
    let values = [];

    // Stack for Operators: 'ops'
    let ops = [];

    for (let i = 0; i < tokens.length; i++)
    {
        // Current token is a whitespace, skip it
        if (tokens[i] === ' ')
        {
            continue;
        }

        // Current token is a number,
        // push it to stack for numbers
        if (tokens[i] >= '0' && tokens[i] <= '9')
        {
            let sbuf = "";

            // There may be more than
            // 1 digits in number
            while (i < tokens.length &&
            tokens[i] >= '0' &&
            tokens[i] <= '9')
            {
                sbuf = sbuf + tokens[i++];
            }
            values.push(parseFloat(sbuf));

            // Right now the i points to
            // the character next to the digit,
            // since the for loop also increases
            // the i, we would skip one
            //  token position; we need to
            // decrease the value of i by 1 to
            // correct the offset.
            i--;
        }

            // Current token is an opening
        // brace, push it to 'ops'
        else if (tokens[i] === '(')
        {
            ops.push(tokens[i]);
        }

            // Closing brace encountered,
        // solve entire brace
        else if (tokens[i] === ')')
        {
            while (ops[ops.length - 1] !== '(')
            {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }
            ops.pop();
        }

        // Current token is an operator.
        else if (tokens[i] === '+' ||
            tokens[i] === '-' ||
            tokens[i] === '*' ||
            tokens[i] === '/')
        {

            // While top of 'ops' has same
            // or greater precedence to current
            // token, which is an operator.
            // Apply operator on top of 'ops'
            // to top two elements in values stack
            while (ops.length > 0 &&
            hasPrecedence(tokens[i],
                ops[ops.length - 1]))
            {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }

            // Push current token to 'ops'.
            ops.push(tokens[i]);
        }
    }

    // Entire expression has been
    // parsed at this point, apply remaining
    // ops to remaining values
    while (ops.length > 0)
    {
        values.push(applyOp(ops.pop(),
            values.pop(),
            values.pop()));
    }

    // Top of 'values' contains
    // result, return it
    return values.pop();
}

// Returns true if 'op2' has
// higher or same precedence as 'op1',
// otherwise returns false.
function hasPrecedence(op1, op2)
{
    if (op2 === '(' || op2 === ')')
    {
        return false;
    }
    if ((op1 === '*' || op1 === '/') &&
        (op2 === '+' || op2 === '-'))
    {
        return false;
    }
    else
    {
        return true;
    }
}

// A utility method to apply an
// operator 'op' on operands 'a'
// and 'b'. Return the result.
function applyOp(op, b, a)
{
    let ans = "";
    switch (op)
    {
        case '+':
            ans= a + b;
            break;
        case '-':
            ans= a - b;
            break;
        case '*':
            ans= a * b;
            break;
        case '/':
            if (b === 0)
               ans = ("Cannot divide by zero ");
            else
                ans= parseFloat(a/ b);
            break;
        default:
            ans= ("Invalid Expression ");
    }
    return ans;

}
export default Evaluate;