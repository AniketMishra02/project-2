import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
                
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Luke McGee, Jack Guy",
                    "title": "Nicola Sturgeon unexpectedly quits as first minister of Scotland amid swirl of political setbacks, citing 'brutality' of public life - CNN",
                    "description": "Nicola Sturgeon, the figurehead of the Scottish independence movement, dramatically announced on Wednesday that she would resign after eight years as Scotland's first minister.",
                    "url": "https://www.cnn.com/2023/02/15/uk/nicola-sturgeon-resigns-scotland-intl/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215112358-01-nicola-sturgeon-021523.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-02-15T12:18:00Z",
                    "content": "Nicola Sturgeon, the figurehead of the Scottish independence movement, dramatically announced on Wednesday that she would resign after eight years as Scotlands first minister. \r\nThe Scottish National… [+3951 chars]"
                },
                {
                    "source": {
                        "id": "the-washington-post",
                        "name": "The Washington Post"
                    },
                    "author": "Shannon Osaka",
                    "title": "Elon Musk agrees to open parts of Tesla's charging network to everyone - The Washington Post",
                    "description": "The best charging network in the country will no longer be under lock and key.",
                    "url": "https://www.washingtonpost.com/climate-environment/2023/02/15/tesla-supercharger-network-locked/",
                    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VTIBVMOQ74QDC2AWYQFFIP6NZY.jpg&w=1440",
                    "publishedAt": "2023-02-15T12:14:35Z",
                    "content": "Comment on this story\r\nTesla will open parts of its charging network to all drivers, the White House announced Wednesday,a move that could help reassure road-trip loving Americans that they can trave… [+5151 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Lianne Kolirin",
                    "title": "Brianna Ghey: Boy and girl charged with murder of trans teen in English park - CNN",
                    "description": "Two schoolchildren have been charged with murder following the death of Brianna Ghey, a 16-year-old transgender girl in an English village.",
                    "url": "https://www.cnn.com/2023/02/15/europe/brianna-ghey-murder-charge-gbr-intl-scli/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215094832-03-brianna-ghey.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-02-15T12:14:00Z",
                    "content": "Two schoolchildren have been charged with murder following the death of a 16-year-old transgender girl in an English village. \r\nA boy and a girl, both aged 15, have been charged with the murder of Br… [+2088 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Diana Olick",
                    "title": "Mortgage demand drops as interest rates bounce higher - CNBC",
                    "description": "Total mortgage application volume fell 7.7% last week as mortgage rates increased.",
                    "url": "https://www.cnbc.com/2023/02/15/mortgage-demand-drops-interest-rates-jump.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107078767-1655849251148-gettyimages-1404270422-031a4288_746e5b0f-dc80-459e-a8a5-6010c1575964.jpeg?v=1676462401&w=1920&h=1080",
                    "publishedAt": "2023-02-15T12:00:01Z",
                    "content": "After falling for five straight weeks, mortgage rates jumped last week, triggering a decline in mortgage demand.\r\nTotal mortgage application volume fell 7.7% last week, compared with the previous wee… [+2065 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Russian bombers intercepted by NORAD near Alaska - Reuters",
                    "description": "Several Russian strategic bombers and fighter jets have been intercepted by North American air defence forces as they flew over international airspace near Alaska, the North American Aerospace Defence Command (NORAD) said.",
                    "url": "https://www.reuters.com/world/russian-bomber-jets-intercepted-by-norad-near-alaska-2023-02-15/",
                    "urlToImage": "https://www.reuters.com/resizer/BwciNjFzAddV0z3W41yabDPyZIU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EDUYMM3PDJOMRMQ462NKL62MQU.jpg",
                    "publishedAt": "2023-02-15T11:52:00Z",
                    "content": "Feb 15 (Reuters) - Several Russian strategic bombers and fighter jets have been intercepted by North American air defence forces as they flew over international airspace near Alaska, the North Americ… [+1933 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "NASA's Perseverance Mars Rover Shows Off Collection of Martian Samples in Stunning Panorama - SciTechDaily",
                    "description": "NASA's Red Planet rover snapped a portrait of the sample depot it has assembled with 10 backup sample tubes that could be returned to Earth by a future mission. People say “pics or it didn’t happen,” and apparently even space robots know what that means. As s…",
                    "url": "https://scitechdaily.com/nasas-perseverance-mars-rover-shows-off-collection-of-martian-samples-in-stunning-panorama/",
                    "urlToImage": "https://scitechdaily.com/images/Perseverance-Enhanced-Color-Portrait-of-Mars-Sample-Depot-Annotated-scaled.jpg",
                    "publishedAt": "2023-02-15T11:41:29Z",
                    "content": "ByJet Propulsion LaboratoryFebruary 15, 2023\r\nPerseverances Portrait of the Sample Depot: NASAs Perseverance Mars rover captured this portrait of its recently completed sample depot using its Mastcam… [+6512 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "One Mile at a Time"
                    },
                    "author": "Ben Schlappig",
                    "title": "Lufthansa Group Suffers IT Outage, Frankfurt Airport Closes - One Mile at a Time",
                    "description": "Lufthansa Group is facing a massive global IT outage, causing issues worldwide for air travelers. Here's what we know so far.",
                    "url": "https://onemileatatime.com/news/lufthansa-group-it-outage/",
                    "urlToImage": "https://cdn.onemileatatime.com/wp-content/uploads/2023/02/Air-Canada-777-Business-Class-40.jpeg",
                    "publishedAt": "2023-02-15T11:40:21Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Hugh Son",
                    "title": "Goldman Sachs scraps idea for direct-to-consumer credit card after strategy shift - CNBC",
                    "description": "Not long ago, CEO David Solomon told analysts the bank was developing its own card, which would've made use of the platform Goldman created for the Apple Card.",
                    "url": "https://www.cnbc.com/2023/02/15/goldman-sachs-scraps-idea-for-direct-to-consumer-credit-card.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105950744-1559751585019qz0_5446-2.jpg?v=1676459774&w=1920&h=1080",
                    "publishedAt": "2023-02-15T11:16:14Z",
                    "content": "Goldman Sachs has dropped plans to develop a Goldman-branded credit card for retail customers, another casualty of the firm's strategic pivot, CNBC has learned.\r\nNot long ago, CEO David Solomon told … [+2954 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": null,
                    "title": "How Nikki Haley and other Republicans are challenging Trump for 2024 - USA TODAY",
                    "description": null,
                    "url": "https://www.usatoday.com/restricted/?return=https:%2F%2Fwww.usatoday.com%2Fstory%2Fnews%2Fpolitics%2F2023%2F02%2F15%2Fnikki-haley-republicans-trump-2024%2F11253920002%2F",
                    "urlToImage": null,
                    "publishedAt": "2023-02-15T11:00:21Z",
                    "content": "Skip to main content\r\nThis content is only available to USA TODAY subscribers.\r\nAccess all subscriber-only stories\r\nYour subscription includes access to:\r\nExclusive, subscriber-only content and weekl… [+796 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Russia reports battlefield advances as Ukraine urges faster military aid - Reuters",
                    "description": "Russia said on Wednesday its troops had broken through two fortified lines of Ukrainian defences on the eastern front, as Kyiv described the situation there as difficult and called for faster military aid ahead of a predicted Russian offensive.",
                    "url": "https://www.reuters.com/world/europe/zelenskiy-urges-speedy-help-allies-russia-pounds-ukraines-east-2023-02-14/",
                    "urlToImage": "https://www.reuters.com/resizer/n5dlkZ55UuqN5ZHNSq7W5mSps2c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DLK3YVSPGFO6JAVOJMLIHGJD74.jpg",
                    "publishedAt": "2023-02-15T10:04:00Z",
                    "content": "KYIV, Feb 15 (Reuters) - Russia said on Wednesday its troops had broken through two fortified lines of Ukrainian defences on the eastern front, as Kyiv described the situation there as difficult and … [+5707 chars]"
                },
                {
                    "source": {
                        "id": "independent",
                        "name": "Independent"
                    },
                    "author": "Graig Graziosi",
                    "title": "Ohio train derailment - latest: Anger at Biden and Buttigieg for ‘ignoring’ East Palestine chemicals disaster - The Independent",
                    "description": "EPA has confirmed the presence of butyl acrylate in the Ohio River basin",
                    "url": "https://www.independent.co.uk/climate-change/news/2023-ohio-train-derailment-east-palestine-map-b2282559.html",
                    "urlToImage": "https://static.independent.co.uk/2023/02/10/21/APTOPIX_Train_Derailment_Ohio_87570.jpg?quality=75&width=1200&auto=webp",
                    "publishedAt": "2023-02-15T09:00:00Z",
                    "content": "Sign up to the Independent Climate email for the latest advice on saving the planet\r\nGet our free Climate email\r\nOhio Governor Mike DeWine is calling on Congress to take action in response to a train… [+10149 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "FOX Weather",
                    "title": "Heroic nurses save newborns by holding onto incubators during Turkey earthquake - New York Post ",
                    "description": "The video footage shows two nurses rushing to hold onto incubators to prevent them from tipping over or sliding across the floor during the initial moments of the first powerful earthquake.",
                    "url": "https://nypost.com/2023/02/15/turkey-earthquake-nurses-save-newborns-by-holding-onto-incubators/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/02/turkey.jpg?quality=75&strip=all&1676432688&w=1024",
                    "publishedAt": "2023-02-15T08:52:00Z",
                    "content": "GAZIANTEP, Turkey  Security cameras captured dramatic video of hospital staff in Gaziantep, Turkey, rushing to save newborns, children and other people as the ground violently shook during a catastro… [+2329 chars]"
                },
                {
                    "source": {
                        "id": "al-jazeera-english",
                        "name": "Al Jazeera English"
                    },
                    "author": "Al Jazeera",
                    "title": "WHO intensifies surveillance in E Guinea after Marburg outbreak - Al Jazeera English",
                    "description": "The country officially declared its first outbreak of Marburg virus disease on Monday.",
                    "url": "https://www.aljazeera.com/news/2023/2/15/who-intensifies-surveillance-in-e-guinea-after-marburg-outbreak",
                    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/02/GettyImages-1289422427-1.jpg?resize=1200%2C675",
                    "publishedAt": "2023-02-15T08:46:12Z",
                    "content": "The World Health Organization (WHO) has intensified surveillance after Equatorial Guinea confirmed an outbreak of the Marburg virus, a highly infectious and deadly disease similar to Ebola, which kil… [+2490 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Cyclone Gabrielle moves away from New Zealand, recovery efforts begin - Reuters",
                    "description": "Cyclone Gabrielle weakened and moved away from New Zealand on Wednesday as the country started to assess the damage caused by significant flooding, landslides and high winds that left four people dead and displaced thousands from their homes.",
                    "url": "https://www.reuters.com/world/asia-pacific/cyclone-gabrielle-moves-away-new-zealand-leaves-two-dead-huge-clean-up-2023-02-14/",
                    "urlToImage": "https://www.reuters.com/resizer/JMvaQDVO0tWz-PcgZOMKq8QhGH0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DP46JEPGMVMIZL3VJ53UJUSULU.jpg",
                    "publishedAt": "2023-02-15T07:18:00Z",
                    "content": "WELLINGTON, Feb 15 (Reuters) - Cyclone Gabrielle weakened and moved away from New Zealand on Wednesday as the country started to assess the damage caused by significant flooding, landslides and high … [+3631 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Nouran Salahieh",
                    "title": "Motive behind Michigan State University mass shooting remains unclear as police share new details about the gunman - CNN",
                    "description": "As police share new details about the gunman in the Michigan State University mass shooting that left three people dead and five others wounded, authorities say many questions remain, including what motivated the violence.",
                    "url": "https://www.cnn.com/2023/02/15/us/michigan-state-university-mass-shooting-wednesday/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230214185913-alexandria-verner-vigil-0214.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-02-15T07:15:00Z",
                    "content": "As police share new details about the gunman in the Michigan State University mass shooting that left three people dead and five others wounded, authorities say many questions remain, including what … [+8157 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": "Bryan Alexander, USA TODAY",
                    "title": "'Joker' sequel first look revealed with Lady Gaga embracing Joaquin Phoenix: 'Happy Valentine's Day' - USA TODAY",
                    "description": "Director Todd Phillips revealed Lady Gaga and Joaquin Phoenix in the first look at \"Joker: Folie à Deux,\" to end Valentine's Day on a dark note.",
                    "url": "https://www.usatoday.com/story/entertainment/movies/2023/02/14/joker-2-first-look-lady-gaga-joaquin-phoenix/11261564002/",
                    "urlToImage": "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2021/08/12/USATODAY/usatsports/imageForEntry47-EhU.jpg?auto=webp&format=pjpg&width=1200",
                    "publishedAt": "2023-02-15T06:16:37Z",
                    "content": "Lady Gaga ended Valentine's Day with a dark flourish, showing off the first look of her role in the \"Joker\" sequel on her Twitter account late Tuesday.\r\nThe image from \"Joker: Folie à Deux\" shows Gag… [+1512 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MacRumors"
                    },
                    "author": "Joe Rossignol",
                    "title": "15-Inch MacBook Air Will Reportedly Have M2 Chip - MacRumors",
                    "description": "Apple's rumored 15-inch MacBook Air will be equipped with the M2 chip, according to Taiwanese supply chain publication DigiTimes. The report...",
                    "url": "https://www.macrumors.com/2023/02/15/15-inch-macbook-air-m2-chip-rumor/",
                    "urlToImage": "https://images.macrumors.com/t/9Jk4bQyyVbFsigZE7SgmTZsQOCE=/2500x/article-new/2022/06/MacBook-Air-Multiple-Sizes-Feature.jpg",
                    "publishedAt": "2023-02-15T05:04:19Z",
                    "content": "Apple's rumored 15-inch MacBook Air will be equipped with the M2 chip, according to Taiwanese supply chain publication DigiTimes. The report claims the laptop will be released in the second quarter o… [+1627 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Eonline.com"
                    },
                    "author": "Angie Orellana Hernandez",
                    "title": "Marc Anthony and New Wife Nadia Ferreira Are Expecting Their First Baby Together - E! NEWS",
                    "description": "Marc Anthony and wife Nadia Ferreira announced they were expecting their first child in a Feb. 14 Instagram post, calling it the \"Best Valentine's Gift Ever!!!\"",
                    "url": "https://www.eonline.com/news/1365031/marc-anthony-and-new-wife-nadia-ferreira-are-expecting-their-first-baby-together",
                    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20221017/rs_1200x1200-221117164324-1200-GettyImages-1244862025.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                    "publishedAt": "2023-02-15T03:46:00Z",
                    "content": "Marc Anthony's Valentine's Day just got extra special.\r\nOn Feb. 14, the salsa artist and his wife, Nadia Ferreira, shared that they are expecting their first child together. Posting a picture of Marc… [+749 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "INSIDER"
                    },
                    "author": "Kim Renfro",
                    "title": "Rihanna rehearsal footage for Super Bowl is going viral on TikTok - Insider",
                    "description": "TikTokers immediately recognized Parris Goebel's choreography with the Royal Family Dance Crew: \"This is how Rihanna was supposed to perform!\"",
                    "url": "https://www.insider.com/rihanna-rehearsal-footage-super-bowl-backup-dancers-on-tiktok-2023-2",
                    "urlToImage": "https://i.insider.com/63ec2729eeb52e0018868e4b?width=1200&format=jpeg",
                    "publishedAt": "2023-02-15T03:34:34Z",
                    "content": "Choreographer and viral dance star Parris Goebel is once again racking up views on social media with the rehearsal footage for Rihanna's Super Bowl halftime show.\r\nNew Zealand dancer Goebel broke int… [+1759 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "DOJ moves to force testimony from Trump's lawyer through 'crime-fraud exception' - MSNBC",
                    "description": "Bradley Moss, a national security attorney, talks with Alex Wagner about breaking news that the Justice Department is asking a judge to override Donald Trump...",
                    "url": "https://www.youtube.com/watch?v=-pM35yRiw50",
                    "urlToImage": "https://i.ytimg.com/vi/-pM35yRiw50/maxresdefault.jpg",
                    "publishedAt": "2023-02-15T03:00:00Z",
                    "content": null
                }
            
        
    ]
    constructor(){
        super();
        console.log("Hello i am constructor from news component");
        this.state={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>News Nation - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
