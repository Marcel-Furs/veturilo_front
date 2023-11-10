function ModalBox({children, header}) {
    return (
      <div id="myModal" class="modal-box">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>{header}</h2>
        </div>
        <div class="modal-body">
          <p>{children}</p>
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    
    </div>)
}

export default ModalBox;
