import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from 'react-bootstrap/Table'


import Row from 'react-bootstrap/Row';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class CreateMember extends Component {

  constructor(props) {
    super(props)
    
  
    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentMobile= this.onChangeStudentMobile.bind(this);
    this.onChangeStudentGym= this.onChangeStudentGym.bind(this);
    this.onChangeStudentAerobics= this.onChangeStudentAerobics.bind(this);
    this.onChangeStudentSauna= this.onChangeStudentSauna.bind(this);
    this.onChangeStudentSex= this.onChangeStudentSex.bind(this);
    this.onChangeStudentDuration= this.onChangeStudentDuration.bind(this);
    this.onChangeStudentMembership= this.onChangeStudentMembership.bind(this);
    this.onChangeStudentDate= this.onChangeStudentDate.bind(this);
    this.onChangeStudentAgreed= this.onChangeStudentAgreed.bind(this);
    

    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      age:null,
      mobile:null,
      duration:'',
      date:'',
     agreed: false,

    }
  
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeStudentMobile(e) {
    this.setState({ mobile: e.target.value })
  }
  onChangeStudentGym() {
    this.setState( prevState => ({
gym: !prevState.gym
    })); }
  
    onChangeStudentAerobics() {
      this.setState( prevState => ({
  aerobics: !prevState.aerobics
      })); }
  
      onChangeStudentSauna() {
        this.setState( prevState => ({
    sauna: !prevState.sauna
        })); }
        onChangeStudentAgreed() {
          this.setState( prevState => ({
      agreed: !prevState.agreed
          })); }
          onChangeStudentDate(e) {
            this.setState({ date: e.target.value });
          }
        onChangeStudentSex(e) {
          this.setState({ sex: e.target.value })
        }
        onChangeStudentDuration(e) {
          this.setState({ duration: e.target.value })
        }
        onChangeStudentMembership(e) {
          this.setState({ membership: e.target.value })
        }
  onSubmit(e) {
    e.preventDefault();
     e.target.reset();
   alert('SUCCESSFULLY SUBMITTED');
 let arr = [];
      for (var key in this.state) {
        if(this.state[key] === true) {
          arr.push(key); 
        }
      }
    
    
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      mobile: this.state.mobile,
      checkbox: arr.toString(),
      sex:this.state.sex,
      date: this.state.date,
      duration:this.state.duration,
      membership:this.state.membership,
      
    

    }; 
    
     
        
     
    axios.post('http://localhost:4000/students/create-member', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', age:'', mobile:'' ,  date:'', aerobics:'',sauna:'',duration:'',agreed: false });
  }
 
  render() {
    return (<div >
      <Form onSubmit={this.onSubmit}  autoComplete="off" spellcheck="false" >
      
      <Row  className="g-2"> 
  <Table borderless  id="tab_logic" size="sm" >
 
   
        <tr>
        <td>
          
          <th class="text-center">Company Name</th>
          <FloatingLabel
        controlId="floatingInput1"
        label="Company Name"
        className="mb-3"
      >
         
          <Form.Control type="text"  size="sm"  required value={this.state.name} onChange={this.onChangeStudentName} />
          </FloatingLabel>
        </td>
        
        <td>
          <th class="text-center">Cheque Number</th>
          <FloatingLabel
        controlId="floatingInput9"
        label="Cheque Number"
        className="mb-3"
      >
          
          
          <Form.Control type="Number" size="sm" value={this.state.age} onChange={this.onChangeStudentAge}/>
          </FloatingLabel> </td>
      
        
        
        {/* <td>
          <th class="text-center"></th>
          <FloatingLabel controlId="floatingSelect" label="Select Gender" className="mb-3">
            
            <Form.Control as="select"  required custom onChange={this.onChangeStudentSex}>
            <option ></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            
            </Form.Control>
            </FloatingLabel>
          </td> */}
</tr>

<tr>
<td>

<th class="text-center">Cheque Amount</th>
          <FloatingLabel
        controlId="floatingInput2"
        label="Cheque Amount"
        className="mb-3"
      >
          
          <Form.Control type="Number" required value={this.state.mobile} onChange={this.onChangeStudentMobile}/>
          </FloatingLabel>
       </td>
       <td>
        <th class= "text-center">Date</th>
               <FloatingLabel>
                
                  <Form.Control
                  ontrolId="floatingInput8"
                    type="Date"
                    className="mb-3"
                    value={this.state.date}
                    onChange={this.onChangeStudentDate}
                  />
                </FloatingLabel>
              </td>
        {/* <td>
        <th class="text-center">Email</th>
          <FloatingLabel
        controlId="floatingInput3"
        label="Email address"
        className="mb-3"
      >
        
          
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
      
        </FloatingLabel>
        </td> */}
        
          </tr>
          <tr> <td>
          <th class="text-center" >Bank</th>
          <FloatingLabel controlId="floatingSelect2" label="Select" className="mb-3">
           
           <Form.Control as="select" custom onChange={this.onChangeStudentDuration} required>
           <option ></option>
             <option value="Dashen">Dashen</option>
             <option value="CBE">CBE</option>
            
           </Form.Control>
           </FloatingLabel>
         </td></tr>
      </Table>
      {/* <div>
      <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header><b>Rules and Regulations / ደንብና መመሪያ</b> </Accordion.Header>
    <Accordion.Body>
    1.
Members of Maxview GYM must bring their membership card to enter into any of
the facilities. Membership cards are strictly personal and non-transferable.
<br/>
2. Management reserves the right to re-adjust the operating hours at any time without
prior notice or close in case of force major, repair and maintenance work, or
cleaning.<br/>
3.
Management reserves the right to
occasionally hold Tournaments and create
activities, during which time the facilities will be used only for tournaments or for the
activities being held.<br/>
4. The management does not assume responsibility for lost articles within Maxview
Gym.<br/>
5.
No food or beverages can be brought into the facilities. Your utmost co-operation
when handling any glass containers will be appreciated for the safety of all. Please
report any breakage to the personnel's of Maxview Gym.<br/>
6.
Members should take off their clothes to change at the locker rooms only. Members
may not take off their clothes to change in the GYM area.<br/>
7
The management does not assume responsibility for accidents to children or any
other individual that does not follow the rules and regulations of Maxview Gym.<br/>
8
It is your obligation to return back the equipment's that you use in the gym.<br/>
9.
Locker keys must be returned on the day of issue. Failure to do so will result
in forfeit of Birr 100.<br/>
10. It is not allowed to use any kind of scrap or cosmetics in steam and sauna.<br/>
11. Members and their guests must comply with the rules and regulation of the Maxview
GYM. The use of the facility is fully at own risk at all times.
<br/>
<br/>
<b>Violation of these regulations could result in, cancellation of
membership.</b>
<br/>
<br/>
1. የማክስ ቪው ጂም አባላት ወደየትኛውም የጂሙ ክፍል ሲገቡ የአባልነት መታወቂያቸውን 
ማሳየት አለባቸው:: የአባልነት መታወቂያ ካርድ ለአንድ ሰው ብቻ የሚያገለግል ሲሆን ሌላ ሰው 
እንዲጠቀምበት አሳልፎ መስጠት አይቻልም:: 
<br/>
2. አስተዳደሩ የጂሙን መግቢያና መውጪያ ሰዓት እንደአስፈላጊነቱ መለወጥ የሚችል ሲሆን 
አስገዳጅ ሁኔታዎች ሲያጋጥሙት ማለትም እንደ ድንገተኛ ፅዳት ጥገናና የመሳሰሉት ሁኔታዎች 
ያለምን ቅድመ ማስጠንቀቂያ ጂሙን ሊዘጋ ይችላል፡፡ 
<br/>
3. የጂሙ አስተዳደር አልፎ አልፎ ውድድሮችንና የመዝናኛ ፕሮግራሞችን የማካሄድ መብቱ 
የተጠበቀ ሲሆን ይህ በሚሆንበት ጊዜ ጂሙ አገልግሎት የሚሰጠው ለውድድሩ ወይም ለመዝናኛ 
ፕሮግራሙ ብቻ ይሆናል፡ 
<br/>
4. በማክስ ቪው ጂም ውስጥ እያሉ ለሚጠፋብዎት ንብረት የጂሙ አስተዳደር ኃላፊነቱን አይወስድም:: 
<br/>
5. ማንኛውንም ዓይነት ምግብና መጠጥ ወደ ጂሙ ይዞ መግባት አይቻልም:: ለሁሉም የጂሙ 
ተጠቃሚዎች ደህንነት ሲባል ጠርሙስ ነክ ፈሳሽ መያዣዎችን በጥንቃቄ በመያዝ የሚያደርጉትን 
ትብብር እናደንቃለን፡፡ 
<br/>
6. የጂሙ አባላት ልብሶቻቸውን ለመቀየር ማውለቅ የሚችሉት በልብስ መቀየሪያ ክፍሎች ውስጥ 
ብቻ ነው፡:: አባላት በጂሙ ውስጥ ልብስ መቀየር አይፈቀድላቸውም፡ 
<br/>
7. የማክስ ቪው ጂም ያወጣቸውን ደንብና መመሪያዎች በማይከተል ማንኛውም ግለሰብ ወይም ልጅ 
ላይ ለሚደርሰው አደጋ የጂሙ አስተዳደር ሃላፊነት አይወስድም:: 
<br/>
8. የተጠቀሙበትን የስፖርት መሳሪያዎች መመለስ የእርስዎ ግዴታ መሆኑን እናሳውቃለን፡፡ 
<br/>
9. ሎከር ቁልፍ ከተጠቀሙ በኋላ መመለስ ይኖርብዎታል ይህ ካልሆነ ግን 100 ብር ያስቀጣዎታል፡፡ 
<br/>
10. ስቲምና ሳውና ውስጥ ምንም አይነት ስክራፕ ወይም ኮስሞቲክስ ተቀብቶ መግባት አይቻልም፡፡ 
<br/>
11. አባላቶችና ይዘዋቸው የሚመጡት ሰዎች የማክስ ቪው ጂም ያወጣቸውን ደንቦችና መመሪያዎች 
መከተል አለባቸው:: በጂሙ ውስጥ በሚጠቀሙበት በማንኛውም ወቅት ለሚደርስብዎት ችግር 
ኃላፊነትዎን ራስዎ ይወስዳሉ:: 
<br/>
<br/>
<b>ከላይ የተጠቀሱትን መመሪያዎች አለማክበር ከአባልነትን ሊያሰርዝ ይችላል::</b>
    </Accordion.Body>
  </Accordion.Item>
</Accordion></div> */}
</Row>
<br/><br/>
          <Form.Group controlId="checkbox3">  
          <Form.Check type="checkbox"  checked={this.state.agreed} onChange={this.onChangeStudentAgreed} 
          label="I have read all conditions, rules and regulations listed above 
          and wish to confirm acceptance of them. I also confirm that membership is 
          for the period requested and that no refund or extension of membership period 
          will be made under any circumstances by Life Sport Gym."/>
          
          </Form.Group>
          
       <Button  variant="danger" size="lg" block="block" type="submit" className="mt-4" disabled={!this.state.agreed}  >
          Submit
        </Button>
        <br/><br/>

      </Form>
      <tbody>
<tr>
</tr>
</tbody>
    </div>);
  }
}