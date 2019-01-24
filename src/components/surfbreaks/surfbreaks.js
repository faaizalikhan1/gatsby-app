import React, { Component } from 'react'
import surfbreaks from '../../data/surfbreaks'
import Card from '@material-ui/core/Card'
import { navigate } from "gatsby"


class SurfBreaks extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {
          surfbreaks.map((surfbreak, i) => {
            return(
              <Card className="card__section" key={i}>
                <div className="card__inner" onClick={()=> navigate(`/surfbreaks/${surfbreak.title}`)}>
                  {surfbreak.title}
                </div>
              </Card>
            )
          })
        }
      </div>
    )
  }
}

export default SurfBreaks
