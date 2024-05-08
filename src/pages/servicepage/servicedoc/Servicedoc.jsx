import React from 'react'
import Doctorcard from '../../../components/doctorcard/Doctorcard'
import imageone from '../../../images/passionimage_two.png'
import './Servicedoc.css'

const Servicedoc = () => {
  return (
    <section id='servicedoc'>
        <div className='container'>
            <div className='servicedoc_contant_wrapper'>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
                <Doctorcard text="Free Checkup" style="servicedoc_head" textpera="Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in." stylepera="servicedoc_pera" img={imageone}/>
            </div>
        </div>
    </section>
  )
}

export default Servicedoc