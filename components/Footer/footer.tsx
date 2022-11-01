import { Row, Col } from 'reactstrap';
import { Section } from '../Section';
import { Container } from '../Container';
import footer from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={footer.footer}>
			<Section hasTop>
				<Container>
					<Row>
						<Col md={6}>Footer goes here</Col>
					</Row>
				</Container>
			</Section>
		</footer>
	);
};
