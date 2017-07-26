// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// btn check
$('#radioBtn a').on('click', function () {
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#' + tog).prop('value', sel);

    $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
});

//
$("#input-id").fileinput({
    showUpload: false,
    previewFileType: 'any',
    showCaption: false,
    showClose: true,
    language: 'pt-BR',
    maxFileSize: 1500,
    showBrowse: false,
    browseOnZoneClick: true,
    elErrorContainer: '#kv-avatar-errors-2',
    msgErrorClass: 'alert alert-block alert-danger',
    defaultPreviewContent: '<img src="http://localhost:8000/public_html/assets/img/upload/photo.png" alt="Seu avatar" style="width:100%">' +
            '<h6 class="text-muted" style="text-align: center;font-size: 14px;">Avatar</h6>',
    allowedFileExtensions: ["jpg", "png", "gif"]
});

$('.selectpicker').selectpicker({
    width: '100%'
});

$('#excluding').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget);
    var id = button.data('group');

    var modal = $(this);
    modal.find('.modal-title').text('Excluir Cliente #' + id);
    modal.find('#confirm').attr('href', 'http://localhost:8080/SistemaCadastro/admin/groups/remove/' + id);
});



