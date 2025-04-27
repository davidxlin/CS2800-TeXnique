// Have a problem to add? Submit it here: https://forms.gle/DXjPeTL5DbJBhKRv8

let problems = [
	{
		"title": "Pigeonhole principle",
		"description": "do pigeons not have claustrophobia?",
		"latex": String.raw`f:X\to Y,|X|>|Y|\implies \exists x_1\exists x_2(x_1\neq x_2\land f(x_1)=f(x_2))`
	},
	{
		"title": "Law of the unconscious statistician",
		"description": "I consciously use this.",
		"latex": String.raw`\mathbb E[g(X)] = \int_{-\infty}^\infty g(x)f_X(x)\mathrm dx`
	},
	//{
	//	"title": "Harshaan's Identity",
	//	"description": "i think it would help...",
	//	"latex": String.raw`\Pr(A\cup B) = \Pr(A) + \Pr(B) -\Pr(A\cap B)`
	//}
	{
		"title": "The complementary event",
		"description": "I wish someone would complement me :(.",
		"latex": String.raw`\Pr(\overline{A}) = 1 - \Pr(A)`
	},
	{
		"title": "Conditional probability",
		"description": "Pr(100 on prelim 2 | i know this) = 1",
		"latex": String.raw`\Pr(A|B) = \frac{\Pr(A\cap B)}{\Pr(B)}`
	},
	{
		"title": "Independence",
		"description": "my jokes are dependent on the topic not being independence",
		"latex": String.raw`\Pr(A\cap B) = \Pr(A)\Pr(B)`
	},
	{
		"title": "The law of total probability",
		"description": "life is a sum of conditional dissapointments",
		"latex": String.raw`\Pr(B) = \sum_{i=1}^n \Pr(B|A_i)\Pr(A_i)`
	},
	{
		"title": "Bayes' theorem",
		"description": "new evidence suggests I'm even worse at probability",
		"latex": String.raw`\Pr(A|B) = \frac{\Pr(B|A)\Pr(A)}{\Pr(B)}`
	},
	{
		"title": "Expectation",
		"description": "E[prelim score] = 100",
		"latex": String.raw`\mathbb E[X] = \sum_{x\in R_X} x\cdot f_X(x)`
	},
	{
		"title": "Linearity of expectation",
		"description": "life isn't linear but at least expectation is!",
		"latex": String.raw`\mathbb E[aX+bY] = a\mathbb E [X] + b\mathbb E [Y]`
	},
	{
		"title": "Variance",
		"description": "my variance must be high the way i keep missing my expectations",
		"latex": String.raw`\mathrm{Var}(X) = \mathbb E [(X-\mathbb E [X])^2] = \mathbb E [X^2] - (\mathbb E [X]) ^2`
	},
	{
		"title": "Standard deviation",
		"description": "variance mogs",
		"latex": String.raw`\sigma_X = \sqrt{\mathrm{Var}(X)}`
	},
	{
		"title": "Markov's Inequality",
		"description": "upper bounding my happiness (yet non-negative!)",
		"latex": String.raw`\Pr(X\ge \alpha) \leq \frac{\mathbb E [X]}\alpha`
	},
	{
		"title": "Chebyshev's Inequality",
		"description": "leon's variance must be high bc i can't bound him falling under my expectations",
		"latex": String.raw`\Pr (|X-\mathbb E [X]|\ge \beta ) \leq \frac{\mathrm{Var}(X)}{\beta^2}`
	},
	{
		"title": "Hoeffding's Inequality",
		"description": "extremely useful unlike myself",
		"latex": String.raw`\Pr(X-\mathbb E[X] \geq t) \leq \exp \left(-\frac{2t^2}{\sum_{i=1}^n (b_i-a_i)^2}\right)`
	}, 
	{
		"title": "Central Limit Theorem",
		"description": "i'm not sure if this is a theorem or a law but it sure is central to my life",
		"latex": String.raw`\frac{\bar X - \mu}{\sigma/\sqrt n} \overset{d}\to N(0,1)`
	}, 
	{
		"title": "Correlation",
		"description": "is the number of ed questions i answer correlated with my inability to find a significant other?",
		"latex": String.raw`\mathrm{Corr}(X,Y) = \frac{\mathrm{Cov}(X,Y)}{\sigma_X\sigma_Y}`
	}, 
	{
		"title": "Covariance",
		"description": "nobody wants to be covariant with me :(",
		"latex": String.raw`\mathrm{Cov}(X,Y) = \mathbb E[(X-\mathbb E[X])(Y-\mathbb E[Y])]`
	},
	{
		"title": "Joint distribution",
		"description": "i need a joint to get through this class",
		"latex": String.raw`f_{X,Y}(x,y) = \frac{\partial^2}{\partial x\partial y}F_{X,Y}(x,y)`
	}, 
	{
		"title": "Product of Independent Random Variables",
		"description": "so convinient i can use this to prove my independence from my friends",
		"latex": String.raw`\mathbb E[XY] = \mathbb E[X]\mathbb E[Y]`
	}
];
