function CustomButton(props) {
  /*CustomButton 을 통해 버튼의 style을 효율적으로 관리할 수 있다.*/
  const { color, onClick, children } = props;
  // color값이 있다면 이렇게 받아온다.
  if (color) {
    return (
      // 여기서 children은 뭐지?
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

// CustomButton으로 내보내기
export default CustomButton;
