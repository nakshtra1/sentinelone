import { memo } from "react";
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Bar, Tooltip, Legend, } from "recharts";
import {
  data,
  data2,
  data1,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  options,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  data10,
  option10,
} from "./Data1chart";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);
//
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function DemoContent() {
  return (
    <>

      <Card style={{ margin: "1rem" }}>
        <Card.Body style={{ width: "100%" }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <div
              style={{
                width: "100%",
                height: "250px",
                // padding: "20px",
              }}
            >
              <Line height={"70%"}
                data={data}
                options={options}
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ margin: "1rem" }}>
        <Card.Body>
          <Card.Text>
            <h3>Attack Surface</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          <Col sm={6} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  {/* Vertical Bar Chart */}
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data1} options={option1}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Straight Bar</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data2} options={option2}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={6} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      // padding: "20px",
                      height: "250px",
                      width: "100%",
                    }}
                  >
                    <Pie data={data10} options={option10}></Pie>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      // padding: "20px",
                      width: "100%",
                      height: "250px",
                    }}
                  >
                    <Pie data={data10} options={option10}></Pie>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Card style={{ margin: "1rem" }}>
        <Card.Body>
          <Card.Text>
            <h4>Security Posture</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          <Col sm={5} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data3} options={option3}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "10px",
                    }}
                  >
                    <Bar data={data4} options={option4}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "10px",
                    }}
                  >
                    <Bar data={data5} options={option5}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={4} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Unmitigated Threats</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data6} options={option6}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Agents Requiring Attention</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data7} options={option7}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Secured Devices bt OS</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      // padding: "20px",
                      width: "100%",
                      height: "250px",
                    }}
                  >
                    <Pie data={data8} options={option8}></Pie>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={5} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Threats by Detection Trigger</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      // padding: "20px",
                      width: "100%",
                      height:"250px"
                    }}
                  >
                    <Pie data={data9} options={option9}></Pie>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={7} style={{ padding: "0" }}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Secured Devices bt Role</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      // padding: "20px",
                      width: "100%",
                      height:"250px"
                    }}
                  >
                    <Pie data={data10} options={option10}></Pie>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     <Container>
  <Row>
    <Col sm={4}>
    <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data3} options={option3}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>Vertical Bar chart</Card.Title>
                <Card.Text>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      // padding: "20px",
                    }}
                  >
                    <Bar data={data3} options={option3}></Bar>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </Col>

  </Row>
</Container> 
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default memo(DemoContent);



<Card style={{ margin: "1rem" }}>
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Secured Devices bt OS</Card.Title>
    <Card.Text>

    </Card.Text>
  </Card.Body>
</Card>

{/* <Container>
  <Row>
    <Col sm={6}></Col>
    <Col sm={3}></Col>
    <Col sm={3}></Col>Col
  </Row>
</Container>  */}