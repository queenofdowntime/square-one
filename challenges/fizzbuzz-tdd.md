# Intro to Test-Driven Development: Fizzbuzz

**note: this tutorial is still being tested. if you encounter any problems, please
open a github issue**

## Task:
Using [TDD](https://www.agilealliance.org/glossary/tdd), write a program which
will help you cheat at the drinking game fizzbuzz.

#### Rules:
- When the given number is divisible by 3, say fizz
- When the given number is divisible by 5, say buzz
- When the given number is divisible by 3 and 5, say fizzbuzz!
- When the given number does not fit any of the other rules, print the number
```
$ ./fizzbuzz.rb 3
fizz

$ ./fizzbuzz.rb 5
buzz

$ ./fizzbuzz.rb 15
fizzbuzz!

$ ./fizzbuzz.rb 7
7 :(
```

## Part 1: Project setup

**Steps**:
1. Create a new directory and initialise a new git repository:
	```
	cd ~
	mkdir -p workspace/fizzbuzz
	cd workspace/fizzbuzz
	git init
	git remote add origin <URL OF YOUR REPO ONLINE>
	echo "hey! I'm learning tdd!" > README.md
	git add README.md
	git commit -m "readme.md"
	git push -u origin master
	```
1. Create 2 subdirectories, `lib` and `spec`, in your project. `lib` you will
recognise as the normal location of your Ruby code. `spec` is where we are going
to put our tests.
1. Install `rspec`. [Rspec](http://rspec.info/) is the testing framework we are going to use to write
[unit tests](https://code.tutsplus.com/articles/the-beginners-guide-to-unit-testing-what-is-unit-testing--wp-25728) for our code.
Rspec is a `gem` so we need to install it using the `gem` command.
	```
	gem install rspec
	```

	A `gem` is a third-party open-source ruby library which we can download to use
	inside or with our own code. Anyone can make a `gem` and there are thousands out
	there; if you create something and think "hey! this is cool and I find it very
	useful, maybe other people will too", then you can share it with the world on [RubyGems](https://rubygems.org/).

## Part 2: Our first test

Test Driven Development follows a simple pattern: `red -> green -> refactor`.
In reality, this works as follows:
1. Write a test which would pass if the code was implemented correctly.
1. See it fail.
1. Write _just_ enough code to make the test pass.
1. See the test pass.
1. Look over the code and think of ways to improve what you have. Is there any
repetition? Can an algorithm be made more efficient?

Writing code this way has 4 benefits: 1) by only writing
what you need to achieve basic tasks, you end up writing less code, all of which
is used (no ghost functions which you have little memory of); 2) every single
function is tested, which makes adding more or changing bits a breeze as you will
find out immediately what you may have broken; 3) nicely structured tests makes
it easy for others looking at your project to figure out what your code is
supposed to do (a good way to get contributors); and 4) because of 1 and 2, you have
complete confidence that your code does what it is supposed to do.

So lets get going with our first test:

**Steps**:
1. Create a new file called `fizzbuzz_spec.rb` in your `spec` directory.
1. Open the project in your text editor, and write the following to it:

	```rb
	describe 'Fizzbuzz' do
		context 'knows when a number' do
			it 'is divisible by 3' do
			end
		end
	end
	```

	So what have we done here?
	You'll notice that we haven't just written `it 'works'`. TDD is about ensuring
	that you write your code incrementally by breaking down your problem into small
	chunks and tackling each one at a time. Right now we are writing a pretty simple
	game, so you may be thinking TDD is overkill, but when it comes to a large project
	or a very complex problem which you can't possibly envisage how it will turn out,
	TDD is a very useful discipline to learn.
	
	So let's read our test.
	The first line is to indicate what you are testing. The rspec program recognises
	everything within this `describe` block as the scope of what you want to test.
	The bit in the quotes is for your benefit. On the next line we declare a `context`.
	Again the quotes are for your benefit. Rspec understands that tests under the
	same context are grouped together and share the same state. The `it` block will
	contain your test (right now there is nothing actually being tested).

1. Now we have to state what we expect to happen when a function in our code runs.
	We have not written a function yet, but we have explained what we want
	in our test, so we know vaguely what it should look like. Put the following line
	inside your `it` block:

	```rb
		it 'is divisible by 3' do
			expect(is_divisible_by_three?(3)).to be true
		end
	```
1. Run the test: `rspec spec/fizzbuzz_spec.rb`
	This should fail with something like `undefined method 'is_divisible_by_three?'`.
	Which makes sense; we haven't defined that method anywhere. Time to write some code.

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/7dff378e7078094a62c62c78c86f71180d539cd6) at this stage.

## Part 3: Make it green
Now that we have our first failing test we are going to follow the errors given
by rspec to make it pass.
So let's start with the first error we were given: `undefined method 'is_divisible_by_three?'`

**Steps**:
1. Create and open a new file called `fizzbuzz.rb` in your project `lib` directory.
1. Define that function which rspec was complaining about. Don't make it do anything,
just define it:
	```rb
	def is_divisible_by_three?(number)
	end
	```
1. Save the file and run the test again. Same thing? What are we missing? Does
our test file know where our code file is? We should probably require it at the
top of `spec/fizzbuzz_spec.rb`
	```rb
	require_relative '../lib/fizzbuzz.rb'

	describe 'Fizzbuzz' do
	...
	```
1. Run the test again: `rspec spec/fizzbuzz_spec.rb`.
	Now we should see something new:
	```
	Failures:

	1) fizzbuzz knows when a number... is divisible by three
	   Failure/Error: expect(is_divisible_by_three?(3)).to be true

	     expected true
		  got nil
	   # ./spec/fizzbuzz_spec.rb:8:in `block (3 levels) in <top (required)>'
	```
	Our test is expecting our function to return `true` but it is getting `nil`.
	So lets go give it what it wants.
1. Go back to `lib/fizzbuzz.rb` and make `is_divisible_by_three?` return `true`
	```rb
	def is_divisible_by_three?(number)
		true
	end
	```
1. Run the test again. And we're green! Congrats, you have passed your first test.
	Let's go wreck it.

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/527fee1aa6a79e490f5cfc8a7deb512729d0195c) at this stage.

## Part 4: Make it red
Obviously we are not done yet. Hardcoding `true` like that is seen as a Very
Bad Thing, and also not very useful for our game. So let's write another test
to force ourselves to do the right thing.

**Steps**:
1. In `spec/fizzbuzz_spec.rb` add a second `it` block under the first. (make sure
	you stay in the same `context` block.)
	```rb
	it 'is NOT divisible by 3' do
		expect(is_divisible_by_three?(1)).to be false
	end
	```
1. Run the tests again. Back to red? 2 examples 1 failure? Expected false got true?
	Excellent. Time for some maths.
1. Back in `lib/fizzbuzz.rb` we need to make our function work out whether the
	`number` it is being passed as an argument (which right now we are ignoring) is
	actually divisible by three. To do that we need to use modular arithmetic: if
	`number` can be even divided by 3, it should return 0 (i.e. not have a remainder).
	```rb
	def is_divisible_by_three?(number)
		number % 3 == 0
	end
	```
1. Now when we run the tests, both should pass. Seeing as we have very little code
	right now, there is no refactoring to be done so we can go on to writing more tests.

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/0cad7726f860a743ba2ffe5cf0c6c11a8f053fee) at this stage.

## Part 5: Lather, Rinse, Repeat

**Steps**:
1. In `spec/fizzbuzz_spec.rb`, add another `it` block (again still within the same `context` block)
	to test whether numbers are divisible by 5:
	```rb
	it 'is divisible by 5' do
		expect(is_divisible_by_five?(5)).to be true
	end
	```
1. Run the tests. Do you see `undefined method` is_divisible_by_five?'`?
1. Go define `is_divisible_by_five?` in `lib/fizzbuzz.rb`. (just define, don't make it
do anything.)
1. Run the tests. `expected true, got nil`? Make your function return `true`.
1. Run the tests. Green again?	Go back to your test file and write the opposing
  `it 'is NOT divisible by 5'` block.
1. Run the tests. `expected false got true`? Fix your code to make it pass.

2 functions in and we are starting to see a pattern here, but let's leave off
refactoring just a little while longer and move onto the last calculation.
By now you should know the pattern, so go ahead and write 2 more tests for a function
which knows if a number `is_divisible_by_three_and_five`.

Once you have all 6 tests passing, commit your work and push to github:
```
git add lib/ spec/
git commit -m "knows if numbers are divisible by 3, 5 or 3 and 5"
git push
```

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/8470c666acdb86c3149976af47b381615e179b54) at this stage.

## Part 6: First Refactor
Right now we have three functions which are doing more or less the same thing.
Let's see if we can [DRY](http://programmer.97things.oreilly.com/wiki/index.php/Don't_Repeat_Yourself) this out a bit.
1. In `lib/fizzbuzz.rb`, edit your code so that instead of 3 functions, we only
		have 1.

	```rb
	def is_divisible_by?(number, divisor)
		number % divisor == 0
	end
	```

1. Run your tests. Are they very unhappy? Update them to use the new function.
  If you are having trouble making them pass, remember to read the failure messages
  carefully: rspec is very helpful and will generally point you in the right direction.

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/b021c82b318a52d3286040a4ba1f2a253c934a77) at this stage.

## Part 7: FizzBuzz says
So now our code can tell us whether a number is divisible by 3, 5 or 3 and 5, but we
can't really play the game with this.

**Steps**:
1. In `spec/fizzbuzz_spec.rb` define a new `context` block underneath the `end`
  of the old one.
	```rb
	context 'when playing the game, fizzbuzz says...' do
		it '"fizz" when a number is divisible by 3' do
		end
	end
	```
1. Next, put what you would expect to happen inside your `it` block:
	```rb
	it '"fizz" when a number is divisible by 3' do
	  expect(fizzbuzz_says(3)).to eq 'fizz'
	end
	```
1. Run your tests. They should fail in a way which by now should be familiar.
1. Go into `lib/fizzbuzz.rb` and create that function. (just define. don't implement.)
1. Run the tests again and follow the error message, remember to do just enough
to make them pass.
	```rb
	def fizzbuzz_says(number)
	  "fizz"
	end
	```
1. Add the next test to force yourself to write code which actually evaluates something.
	```rb
	it '"buzz" when a number is divisible by 5' do
	  expect(fizzbuzz_says(5)).to eq 'buzz'
	end
	```
1. See the test fail, then go back to your code and make your new funtion process
the argument it is passed by using our `is_divisible_by` function:

	```rb
	def fizzbuzz_says(number)
		return "fizz" if is_divisible_by?(number, 3)
		return "buzz" if is_divisible_by?(number, 5)
	end
	```

	note: we actually have to explicitly `return` here, otherwise the program will
	process all lines in the function and only return the result of the last one.
	Remove the `return`s and run the tests without them. You should see your 'fizz'
	test failing, since the last line it evaluated returned `false` when the number 3
	was found not to be divisible by 5. Therefore the `fizzbuzz_says` function
	overall returns `nil`.

1. Go back to `spec/fizzbuzz_spec.rb`, and add the test which check that the
  program says "fizzbuzz" when a number is divisible by 3 and 5.
1. Run the tests, watch it fail.
1. Go to your code and make it pass.

	note: remember to watch your ordering here. Since you are returning immediately
	when the number is first sucessfully divisible, you may end up saying "fizz" rather
	than "fizzbuzz". Make sure you check if a number can be divisible by 3 and 5 first.
	Switch the order of your code to see your tests failing in this way.
1. The last thing we need to do is write a test (and then the code) for when the
  number is not divisible by 3 or 5. It should just return the number.

Once you have all 10 tests passing, commit your work and push to github:
```
git add lib/ spec/
git commit -m "says fizz, buzz and fizzbuzz"
git push
```

[How your project should look](https://github.com/fouralarmfire/fizzbuzz/tree/e8b02e84fafadfe0e8113d280066d91abfbb9e99) at this stage.

## Part 8: Bonus Round

All our calculations are done and we are ready to play the game... but it doesn't
quite work in the way we planned at the start. We can't do `$ ./fizzbuzz.rb 3`
and expect to see `fizz` in the terminal right now.

So, for bonus points, you are going to write some integration tests. Up to now we have
been testing out each individual `unit` of code in... unit tests (obvs). Now we
need to verify that our code integrates with the tools which are not directly part of that code
but are going to interact with it (in this case the command line).

Normally, you would write your `integration` tests in a separate place (the code too),
but since we are only going to write three more we can just add them to the very
end of our existing test file in a new `describe` block.

You will need to find a way of executing your game from inside a test file.
Things like [ShellOut](https://github.com/chef/mixlib-shellout#mixlibshellout) or [Rspec Command](https://github.com/coderanger/rspec-command) may help you do that,
but there are others so take some time to look around.

Drive out your code the same way as you did above: describe the first simple thing
you expect to happen, do just enough to make it pass, then move onto the next simple thing.
Remember to follow the errors returned by rspec; 8 times out of 10 the answers will
be there.

To make our game work properly, we have to test that:
1. Our code can be executed (successfully, with `exit status 0`).
1. The result will be printed to terminal output (`stdout`).
1. We can pass mulitple arguments and see them all processed (`./fizzbuzz 1 2 3` should print `1 2 fizz`).

Once you have all 13 tests passing, commit your work and push to github:
```
git add lib/ spec/
git commit -m "can be run from the command line"
git push
```

Here is one way your project could look after your [first](https://github.com/fouralarmfire/fizzbuzz/tree/908deb4859e2caf64f8892b274a53183e8d532ae), [second](https://github.com/fouralarmfire/fizzbuzz/tree/e68d20ed0782613a1cf6d773e9c7b60745e39dfb), and [third](https://github.com/fouralarmfire/fizzbuzz/tree/085ad60e7b91008eaf47d3a7bd62d23df88e6a30) tests.

## WooHoo!!

And that's it! You just test-drove your first program.

But don't stop there; test-driven development is a good habit to get into and the
majority of (sensible) companies value it very highly. Think back to small programs
you have written and see if you can do them again through TDD. Or test drive out
another simple game or calculator (Leap Year, maybe?).

If you are not a complete newbie to coding, go ahead and find out how you would
use something like [capybara](https://github.com/teamcapybara/capybara#capybara)
with rspec to test drive your [sinatra](http://sinatrarb.com/) webapp.

There is a testing framework (often much more than one) for every language,
so go ahead and play Fizzbuzz again in the one of your choice.

In fact, small exercises like Fizzbuzz are a great way to get to grips with a new language
and its testing framework; it's my personal goto for the first thing I write in
whatever new thing I am trying.

At some point I will be going on to write another, more challenging TDD tutorial
so watch this space. :)
