/************************************************************
  1) We store each page's text in an array of objects.
  2) When the user searches, we look for the term in each page's
     content (case-insensitive).
  3) If found, we display a link to that page in the results.
************************************************************/

const indexContent = `Periods:  Your Body's Superpower (Seriously!)

Ever heard whispers about "periods" or "that time of the month"? Let's ditch the mystery and get straight to the facts! Periods, also known as menstruation, are a totally normal and healthy part of growing up for anyone with a uterus. Think of it as your body's way of saying, "I'm getting ready for amazing things!"

What's the Big Deal?

Imagine your uterus as a cozy little house where a baby could grow (if a sperm meets up with an egg – but we'll get to that later!). Every month, this house gets a makeover. It builds up a super-comfy lining, like adding fluffy carpets and warm blankets, just in case a fertilized egg decides to move in. This lining is packed with nutrients and blood vessels, basically a five-star hotel for a potential baby.

But here's the thing: if no egg shows up to be fertilized (meaning no pregnancy), the uterus goes, "Hmm, guess we don't need the deluxe suite this month." So, it gently sheds the lining. That's what a period is! It's the uterus tidying up and getting ready for the next cycle.

What's in That Flow?

The menstrual fluid that comes out during your period is a mix of blood, the shed lining of the uterus, and some mucus. It's totally natural and nothing to be grossed out about. Think of it like the body's way of hitting the reset button each month.

Is It Like a Crime Scene? (Spoiler: Nope!)

Okay, let's talk about the blood. Yes, there's blood involved, but it's not the same kind of blood you see if you scrape your knee. Menstrual fluid is a special kind of blood mixed with other stuff. It might be a little thicker or darker than regular blood, and that's perfectly normal.

How Long Does This "Makeover" Take?

Periods usually last between 2 and 7 days. Some people have a lighter flow, some have a heavier flow, and both are within the realm of normal. Your flow can even change from month to month. It's all part of your body's unique rhythm.

Periods: Not a Curse, But a Clue!

Periods are a sign that your body is doing its thing and working as it should. They're a natural and essential part of the reproductive cycle. They're definitely not something to be ashamed of or embarrassed about. In fact, they're kind of amazing when you think about it!`;

const biologyContent = `Period Biology: Your Body's Monthly Symphony (No, Seriously!)
Ever wonder what's actually going on down there during your period? It's not just some random event; it's a beautifully orchestrated biological process! Let's dive into the fascinating world of period biology, minus the boring textbook jargon.

The Uterus: Your Body's Cozy Guest Room (That Gets a Monthly Makeover)
Think of your uterus as a cozy little house where a baby could grow (if a sperm and egg decide to have a party). Every month, this house gets a total interior redesign. It builds up a lush, nutrient-rich lining, kind of like adding plush carpets and a gourmet kitchen, all in anticipation of a potential guest (a fertilized egg).

This lining is packed with blood vessels, providing all the goodies a growing baby would need. It's like a five-star hotel, ready to welcome a new arrival. But here's the twist: if no egg shows up to be fertilized (meaning no pregnancy), the uterus goes, "Hmm, looks like we're not expecting company this month." So, it gently sheds the lining. That's what a period is! It's the uterus doing its monthly cleaning and redecorating.

Hormones: The Conductors of the Period Orchestra
Now, who's in charge of this whole redecorating project? Hormones! These are like tiny chemical messengers that travel through your bloodstream, telling different parts of your body what to do. Two main hormones play a starring role in the menstrual cycle: estrogen and progesterone.

Estrogen: This hormone is like the head of the design team. It's responsible for building up the uterine lining during the first half of the cycle. It also plays a role in other things, like the development of breasts and other female characteristics.
Progesterone: This hormone is like the project manager. After ovulation (more on that in a sec!), progesterone helps maintain the thickened uterine lining, making sure it's nice and cozy just in case a fertilized egg shows up.

The Menstrual Cycle: A Monthly Rhythmic Dance
The menstrual cycle is a series of changes your body goes through each month, all orchestrated by these amazing hormones. It's like a carefully choreographed dance with different phases:

Menstruation (Period): This is when the uterine lining is shed. It usually lasts 2-7 days. The flow is a mix of blood, the shed lining, and some mucus.
Follicular Phase: After your period, estrogen levels rise, and the uterus starts building up a new lining. Meanwhile, in your ovaries, little sacs called follicles start developing, each containing an egg.
Ovulation: This is the main event! One of the follicles bursts, releasing a mature egg. It's like the egg going, "I'm ready for adventure!" The egg then travels through the fallopian tube towards the uterus. This is the time when someone is most fertile and can get pregnant if sperm is present.
Luteal Phase: After ovulation, the ruptured follicle turns into something called the corpus luteum, which releases progesterone. Progesterone keeps the uterine lining nice and thick, just in case the egg gets fertilized. If the egg doesn't get fertilized, the corpus luteum breaks down, causing progesterone levels to drop. This drop in progesterone signals the uterus to shed its lining, leading to the next period. And the cycle starts all over again!

Why Do Periods Happen? (The Big Picture)
Periods are all about preparing for a possible pregnancy. Your body is constantly getting ready, just in case. It's a sign that your reproductive system is working as it should. Even though you might not be thinking about having a baby right now (and that's totally okay!), your body is still doing its thing, following this amazing monthly cycle.

Periods: Not a "Girl Thing," a Human Thing
It's important to remember that periods are a normal and natural part of life for anyone with a uterus. They're not something to be ashamed of or embarrassed about. They're a sign of health and a reminder of the incredible power of the human body. So, embrace the knowledge, understand your body, and rock your period!`;

const dosDontsContent = `Period Do's and Don'ts: Your Guide to a Smoother Flow (Literally!)
Okay, so you've got the lowdown on what periods are. Now, let's talk about navigating them like a pro! Here's your quirky guide to period do's and don'ts, designed to keep you comfortable, confident, and cramp-free(ish).

Do: Embrace the Flow (and the Facts!)
First things first: periods are normal. They're a sign that your body is doing its amazing thing, preparing for potential life (even if you're not planning on having a baby anytime soon!). So, ditch the shame and embrace the flow! The more you understand your body and your cycle, the easier it will be to manage your period like a boss. Knowing what to expect can take away a lot of the anxiety.

Don't: Believe Every Myth You Hear
There's a lot of period misinformation floating around out there. Don't fall for it! No, you can't get pregnant from sitting on a cold toilet seat. No, you shouldn't avoid showering or washing your hair (good hygiene is especially important during your period!). Do your research, talk to trusted adults, and get your facts straight. Websites like this one are a great place to start!

Do: Stock Up on Period Supplies
Be prepared! Keep a stash of your preferred period products (pads, tampons, cups, period underwear – whatever floats your boat) in your bag, at home, and maybe even at school or work. You don't want to be caught off guard, especially if your period is irregular. Think of it as your period emergency kit!

Don't: Rely on Pain to Be a Badge of Honor
Period cramps are no joke. If you're in pain, don't tough it out just to prove how strong you are. There are plenty of things you can do to ease the discomfort. Heat (heating pad, warm bath), gentle exercise (it can actually help!), and over-the-counter pain relievers (like ibuprofen or acetaminophen) can be lifesavers. If your pain is severe or interferes with your daily life, talk to a doctor. They can help you find the right treatment plan.

Do: Stay Hydrated and Nourished
Your body is working hard during your period, so give it the fuel it needs. Drink plenty of water to stay hydrated and try to eat nutritious foods. Think fruits, veggies, whole grains – the good stuff. These can help regulate your hormones and keep your energy levels stable. You might also crave some chocolate, and that's totally okay (in moderation, of course!). Dark chocolate can even be good for you!

Don't: Go Overboard on the Junk Food
While a little bit of what you fancy can be good for the soul, try not to rely on junk food to get you through your period. Too much sugar and processed food can actually worsen PMS symptoms like bloating, mood swings, and fatigue. It's a vicious cycle!

Do: Move Your Body (Gently!)
Exercise might be the last thing you feel like doing when you're on your period, but gentle movement can actually help ease cramps and improve your mood. Try a light walk, some yoga, or a gentle swim. Listen to your body and don't push yourself too hard. Even stretching can make a difference!

Don't: Isolate Yourself
Just because you're on your period doesn't mean you have to become a hermit. Stay social, hang out with friends, and do the things you enjoy. If you're feeling tired or crampy, take it easy, but don't let your period control your life. It's just a few days out of the month!

Do: Listen to Your Body
Everyone's period experience is different. Some people have heavy flows, some have light flows. Some people get cramps, some don't. Pay attention to your body and what it's telling you. If something doesn't feel right, talk to a doctor. It's always better to be safe than sorry.

Don't: Be Afraid to Ask for Help
If you have questions or concerns about your period, don't hesitate to talk to a trusted adult, like a parent, guardian, school nurse, or doctor. There's no such thing as a silly question when it comes to your health. And remember, doctors have heard it all before!

Do: Practice Self-Care
Your period is a good time to prioritize self-care. Take a warm bath, read a book, listen to music, or do something that makes you feel good. You deserve it! Think of it as your monthly "me time."

Don't: Forget to Track Your Cycle
Keeping track of your period on a calendar or using a period tracking app can help you understand your body's rhythm and predict when your next period might start. This can be super helpful for planning activities and avoiding surprises. Plus, it can help you identify any irregularities in your cycle that you might want to discuss with a doctor.

So, there you have it – your comprehensive (and hopefully not-too-boring) guide to period do's and don'ts. Remember, periods are a normal part of life. By understanding your body and practicing good self-care, you can navigate your period with confidence and ease. And remember, you're not alone in this! Millions of people experience periods every month.`;

/************************************************************
  1) This script enables navigation and search functionality.
  2) Clicking on navigation links correctly loads pages.
  3) The search feature scans content and provides links to matches.
************************************************************/

const pagesContent = [
    {
      page: "index.html",
      title: "Periods Intro",
      content: `Periods: Your Body's Superpower (Seriously!)...` 
    },
    {
      page: "biology.html",
      title: "Period Biology",
      content: `Period Biology: Your Body's Monthly Symphony...`
    },
    {
      page: "dosdonts.html",
      title: "Dos & Donts",
      content: `Period Do's and Don'ts: Your Guide to a Smoother Flow...`
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("searchResults");
  
    // Close search results when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideSearch = event.target.closest(".search-bar");
      if (!isClickInsideSearch && resultsContainer.style.display === "block") {
        resultsContainer.style.display = "none";
      }
    });
  
    function searchAcrossPages(query) {
      const lowerQuery = query.toLowerCase();
      return pagesContent.filter(pg => pg.content.toLowerCase().includes(lowerQuery));
    }
  
    function displayResults(results, query) {
      resultsContainer.innerHTML = "";
      
      if (!query) {
        resultsContainer.style.display = "none";
        return;
      }
  
      if (results.length > 0) {
        results.forEach(page => {
          const link = document.createElement("a");
          link.href = page.page;
          link.textContent = `Found in: ${page.title}`;
          resultsContainer.appendChild(link);
        });
      } else {
        const noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.textContent = "No results found.";
        resultsContainer.appendChild(noResults);
      }
      
      resultsContainer.style.display = "block";
    }
  
    // Search on button click
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      const results = searchAcrossPages(query);
      displayResults(results, query);
    });
  
    // Search on enter key press
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const query = searchInput.value.trim();
        const results = searchAcrossPages(query);
        displayResults(results, query);
      }
    });
  
    // Clear results when search input is cleared
    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() === "") {
        resultsContainer.style.display = "none";
      }
    });
  });