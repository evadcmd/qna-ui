import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useWebSocket } from 'src/hook/useWebSocket';
import { WS_ENDPOINT } from 'src/lib/ws';

function Chat() {
  const [input, setInput] = useState('');
  const [tokens, send] = useWebSocket(WS_ENDPOINT);

  function keyDownHandler(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <Container>
      <h1>Chatbot streaming Chat DEMO</h1>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="enter your question here"
            defaultValue={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={keyDownHandler}
          />
          <Button variant="outline-primary" onClick={() => send(input)}>
            Send
          </Button>
        </InputGroup>
        <Form.Group>
          <Form.Label>AI Output</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={tokens.reduce((r, i) => r + i, '')}
            readOnly
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Chat;
