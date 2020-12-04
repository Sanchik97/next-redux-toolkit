import React from 'react'
import {Col, Row} from "antd"

interface props {

}

const Container: React.FC<props> = ({children}) => {
	return (
		<Row justify={"center"}>
			<Col xs={23} md={20} >
				{children}
			</Col>
		</Row>
	)
}

export default Container
