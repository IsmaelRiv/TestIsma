Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*'
]);

Ext.onReady(function() {    
    Ext.QuickTips.init();
        
	Ext.define('Dato',{
        extend: 'Ext.data.Model',      
        fields: [
            { name: 'value', type: 'string' }
        ]
    });
	
	Ext.define('Medicamento',{
        extend: 'Ext.data.Model',      
        hasMany: [
            { associationKey: 'nombreGenerico',    model: 'Dato' },
            { associationKey: 'nombreGenericoGeneral',    model: 'Dato' },
            { associationKey: 'controlActualizaciones',    model: 'Dato' },
            { associationKey: 'noActualizacion',    model: 'Dato' },
            { associationKey: 'codigo',    model: 'Dato' },
            { associationKey: 'tipoMedicamento',    model: 'Dato' },
            { associationKey: 'concentracion',    model: 'Dato' },
            { associationKey: 'demasIndicacion',    model: 'Dato' },
            { associationKey: 'contraIndicaciones',    model: 'Dato' },
            { associationKey: 'unidadesPorEnvase',    model: 'Dato' },
            { associationKey: 'principalIndicacion',    model: 'Dato' },
            { associationKey: 'GrupoTerapeutico',    model: 'Dato' },
            { associationKey: 'nivelAtencion',    model: 'Dato' },
            { associationKey: 'tipoPaciente',    model: 'Dato' },
            { associationKey: 'formaFarmaceutica',    model: 'Dato' },
            { associationKey: 'unidadMedida',    model: 'Dato' },
            { associationKey: 'cbcm',    model: 'Dato' },
            { associationKey: 'vinculacionGuias',    model: 'Dato' },
            { associationKey: 'vinculacionOMS',    model: 'Dato' },
            { associationKey: 'vinculacionCAUSES',    model: 'Dato' },
            { associationKey: 'vinculacionFPGC',    model: 'Dato' },
            { associationKey: 'presentacion',    model: 'Dato' },
            { associationKey: 'dosisDiaria',    model: 'Dato' },
            { associationKey: 'subclaveFK',    model: 'Dato' },
            { associationKey: 'tipoARVFK',    model: 'Dato' },
            { associationKey: 'cabm',    model: 'Dato' },
            { associationKey: 'idTratamientoFK',    model: 'Dato' },
            { associationKey: 'idNivelAtencionFK',    model: 'Dato' },
            { associationKey: 'cabmFK',    model: 'Dato' },
            { associationKey: 'idTipoPacienteFK',    model: 'Dato' },
            { associationKey: 'idFormaFarmaceuticaFK',    model: 'Dato' },
            { associationKey: 'idUnidadMedidaFK',    model: 'Dato' },
            { associationKey: 'cbcmFK',    model: 'Dato' },
            { associationKey: 'idVinculacionFK',    model: 'Dato' },
            { associationKey: 'idPresentacionFK',    model: 'Dato' },
            { associationKey: 'idIndicacionesFK',    model: 'Dato' },
            { associationKey: 'noGrupoTerapeuticoFK',    model: 'Dato' }
		]
		
    });
		
	// create the Data Store	
    var storeMedicamentos = Ext.create('Ext.data.Store', {
        model: 'Medicamento',
		proxy: {
			// load using HTTP
            type: 'ajax',
            //url: 'http://172.23.105.206:3030/ds/query?query=PREFIX++myOntology%3A++%3Cjdbc.mysql%3A%2F%2F11.254.20.219.3306%2Fontologia~160513_181915_CDT%23%3E+%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0Aselect++%3FnombreGenerico+%3Fcodigo++%3FprincipalIndicacion++%3FcontraIndicaciones%0Awhere+%7B%0A++++++++++++%3Fmedicamento++rdf%3Atype+++myOntology%3Amedicamento+.%0A++++++++++++%3Fmedicamento+++myOntology%3Amedicamento.codigo++%3Fcodigo.%0A++++++++++++%3Fmedicamento++myOntology%3Amedicamento.idTratamiento++%3FidTratamiento+.%0A++++++++++++%3Fmedicamento++myOntology%3Amedicamento.nombreGenerico++%3FnombreGenerico.%0A++++++++++++%3Ftratamiento++++myOntology%3Atratamiento.idTratamiento+%3FidTratamiento+.%0A++++++++++++%3Ftratamiento+++rdf%3Atype+++myOntology%3Atratamiento+.%0A++++++++++++%3Ftratamiento++++myOntology%3Atratamiento.principalIndicacion+%3FprincipalIndicacion++.%0A++++++++++++%3Ftratamiento++++myOntology%3Atratamiento.contraIndicaciones+++%3FcontraIndicaciones+.++%0A++%7D%0A%0Alimit+50',
            //url: "http://172.23.105.206:3030/ds/query?query=%23Consulta+que+recupera+las+primeras+50+instancias+de+la+entidad+medicamento++y+sus+correspondientes+instancias+de+la+entidad+tratamiento%2C+solo+se+mestra%0A%23+el+nombre+generico+del+medicamento%2C+el+codigo+del+medicamento%2C++asi+como+la+principal+indicacion+y+sus+contra+indicacion%0A%0APREFIX++ab%3A++%3Cjdbc.mysql%3A%2F%2F11.254.20.219.3306%2Fontologia~160513_181915_CDT%23%3E+%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0Aselect+%0A+%3FnombreGenerico%0A%3FtipoMedicamento%0A%3Fconcentracion%0A%3FunidadesPorEnvase%0A%3FprincipalIndicacion%0A%3FcontraIndicaciones%0A%3FGrupoTerapeutico%0A%3FnivelAtencion%0A%3FtipoPaciente%0A%3FformaFarmaceutica%0A%3FunidadMedida%0A%3Fcbcm%0A%3FvinculacionGuias%0A%3FvinculacionOMS%0A%3FvinculacionCAUSES%0A%3FvinculacionFPGC%0A%3Fpresentacion%0A%3FdosisDiaria%0Awhere+%7B%0A++++++++++++%3Fmedicamento++rdf%3Atype+++ab%3Amedicamento+%3B%0A+++++++++++++++++++++++++++++++++++++ab%3Amedicamento.codigo++%3Fcodigo+%3B%0A++++%09%09%09%09%09%09%09+++ab%3Amedicamento.nombreGenerico++%3FnombreGenerico+%3B+++++++++%09+++++++%09%09%09%09%09+%0A+++++++++++++++++++++++++++++++++++++ab%3Amedicamento.tipoMedicamento++%3FtipoMedicamento+%3B++++%0A+++++++++++++++++++++++++++++++++++ab%3Amedicamento.concentracion+%3Fconcentracion%3B%0A+++++++++++++++++++++++++++++++++ab%3Amedicamento.unidadesPorEnvase+%3FunidadesPorEnvase%3B%0A+++++++++++++++++++++++++++++++++++++++%0A++++%0A++++++++++++++++++++++++++++++++++%23forey+keys%0A+++++++++++%09++++++%09%09%09%09%09+ab%3Amedicamento.idTratamiento++%3FidTratamiento+%3B%0A+++++++++++++++++++++++++++++++++++++ab%3Amedicamento.idNivelAtencion+%3FidNivelAtencion%3B++%0A+++++++%09%09%09%09%09%09%09%09+ab%3Amedicamento.cabm+%3Fcabm%3B%0A++++++%09%09%09%09%09+++++++++++%23+ab%3Amedicamento.subclave++%3Fsubclave%3B++++%0A+++++%09%09%09%09%09%09%09%09%23+ab%3Amedicamento.tipoARV++%3FtipoARV%3B%0A++++++++++++++++++++++++++++++++++++++ab%3Amedicamento.idTipoPaciente+%3FidTipoPaciente%3B+%0A+++++++++++++++++++++++++++++++++++++ab%3Amedicamento.idFormaFarmaceutica+%3FidFormaFarmaceutica%3B++++++%0A+++++%09%09%09%09%09%09%09%09ab%3Amedicamento.idUnidadMedida+%3FidUnidadMedida%3B%0A+++++++++++%09%09%09%09%09%09%09ab%3Amedicamento.cbcm+++%3Fidcbcm%3B++++%0A+++++++++++++++++++++++++++++++++++++++ab%3Amedicamento.idVinculacion+%3FidVinculacion%3B++++%0A+++%09%09%09%09%09%09%09%09%09ab%3Amedicamento.idPresentacion++%3FidPresentacion%3B+%0A++++%0A++++%09%09%09%09%09%09%09%09ab%3Amedicamento.idIndicaciones++%3FidIndicaciones%3B%0A+++++++++++++++++++++++++++++++++++++ab%3Amedicamento.noGrupoTerapeutico++%3FnoGrupoTerapeutico.%0A+++++++++++%09++%09%09%09%09%09++++%0A+++++++++++++++++++++++++++++++++++++++%0A+++++++++++++++%23tables+foraneas%0A++++++++++++%3Ftratamiento++++ab%3Atratamiento.idTratamiento+%3FidTratamiento+.%0A++++++++++++%3Ftratamiento+++rdf%3Atype+++ab%3Atratamiento+.%0A++++++++++++%3Ftratamiento++++ab%3Atratamiento.principalIndicacion+%3FprincipalIndicacion++.%0A++++++++++++%3Ftratamiento++++ab%3Atratamiento.contraIndicaciones+++%3FcontraIndicaciones+.++%0A%0A++++++++++++%3FgrupoTerapeutico+ab%3Agrupoterapeutico.noGrupoTerapeutico+%3FnoGrupoTerapeutico+.%0A++++++++++++%3FgrupoTerapeutico++rdf%3Atype+ab%3Agrupoterapeutico+.%0A++++++++++++%3FgrupoTerapeutico+ab%3Agrupoterapeutico.GrupoTerapeutico++%3FGrupoTerapeutico+.%0A+++++++++++%0A+++++%3Fnivelatencion++ab%3Anivelatencion.idNivelAtencion+%3FidNivelAtencion+.%0A+++++%3Fnivelatencion+++rdf%3Atype+ab%3Anivelatencion+%3B%0A+++++++%09%09%09%09+ab%3Anivelatencion.nivelAtencion+%3FnivelAtencion+.%0A++%0A++%3FtipoPaciente_+ab%3Atipopaciente.idTipoPaciente+%3FidTipoPaciente+.%0A++%3FtipoPaciente_+rdf%3Atype+ab%3Atipopaciente+%3B%0A+++++ab%3Atipopaciente.tipoPaciente+%3FtipoPaciente+.%0A++%0A++%3FformaFarmaceutica_++ab%3Aformafarmaceutica.idFormaFarmaceutica+%3FidFormaFarmaceutica+.%0A++++%3FformaFarmaceutica_+rdf%3Atype+ab%3Aformafarmaceutica+%3B%0A++++ab%3Aformafarmaceutica.formaFarmaceutica+%3FformaFarmaceutica+.%0A++++%0A+++%3Funidadmedica+ab%3Aunidadmedida.idUnidadMedida+%3FidUnidadMedida+.%0A++++%3Funidadmedica+rdf%3Atype+ab%3Aunidadmedida+%3B%0A+++++ab%3Aunidadmedida.unidadMedida+%3FunidadMedida+.%0A++++%0A++%3FcbcmIndividual++ab%3Acbcm.cbcm++%3Fidcbcm+.%0A++%3FcbcmIndividual+++rdf%3Atype+ab%3Acbcm+%3B%0A++++++++++++++++++++ab%3Acbcm.cbcm++%3Fcbcm+.%0A++++++%0A++++%3Fvinculacion+ab%3Avinculacion.idVinculacion+%3FidVinculacion+.%0A+++++%3Fvinculacion+rdf%3Atype+ab%3Avinculacion+%3B%0A++++++++++ab%3Avinculacion.vinculacionGuias+%3FvinculacionGuias+%3B%0A+++++++++ab%3Avinculacion.vinculacionOMS+%3FvinculacionOMS+%3B%0A+++++ab%3Avinculacion.vinculacionFPGC+%3FvinculacionFPGC+%3B%0A+++ab%3Avinculacion.vinculacionCAUSES+%3FvinculacionCAUSES+.%0A++%0A++++%3FpresentacionIndividual++ab%3Apresentacion.idPresentacion++%3FidPresentacion+.%0A++%3FpresentacionIndividual+++rdf%3Atype+ab%3Apresentacion+%3B%0A++++++++++++++++++++ab%3Apresentacion.presentacion++%3Fpresentacion+.%0A++%0A++++++%3Findicaciones++ab%3Aindicaciones.idIndicaciones++%3FidIndicaciones+.%0A++%3Findicaciones+++rdf%3Atype+ab%3Aindicaciones+%3B%0A++++++++++++++++++++ab%3Aindicaciones.dosisDiaria++%3FdosisDiaria+.%0A++%0A++%0A++%0A++%0A++%0A%0A++%7D%0Alimit+500",
			url: "http://172.23.105.206:3030/ds/query?query=%23Consulta+que+recupera+las+primeras+50+instancias+de+la+entidad+medicamento++y+sus+correspondientes+instancias+de+la+entidad+tratamiento%2C+solo+se+mestra%0A%23+el+nombre+generico+del+medicamento%2C+el+codigo+del+medicamento%2C++asi+como+la+principal+indicacion+y+sus+contra+indicacion%0APREFIX++ab%3A++%3Cjdbc.mysql%3A%2F%2F11.254.20.219.3306%2Fontologia~160513_181915_CDT%23%3E+%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect+%0A%3FnombreGenerico%0A%3FnombreGenericoGeneral%0A%3FcontrolActualizaciones%0A%3FnoActualizacion%0A%3Fcodigo%0A%3FtipoMedicamento%0A%3Fconcentracion%0A%3FdemasIndicacion+%0A%3FcontraIndicaciones%0A%3FunidadesPorEnvase%0A%3FprincipalIndicacion%0A%3FGrupoTerapeutico%0A%3FnivelAtencion%0A%3FtipoPaciente%0A%3FformaFarmaceutica%0A%3FunidadMedida%0A%3Fcbcm%0A%3FvinculacionGuias%0A%3FvinculacionOMS%0A%3FvinculacionCAUSES%0A%3FvinculacionFPGC%0A%3Fpresentacion%0A%3FdosisDiaria%0A%3FsubclaveFK%0A%3FtipoARVFK%0A%3Fcabm%0A%0A%23forey+keys%0A%0A%3FidTratamientoFK%0A%3FidNivelAtencionFK%0A%3FcabmFK%0A%23%3FtipoARVFK%0A%23%3FsubclaveFK%0A%3FidTipoPacienteFK%0A%3FidFormaFarmaceuticaFK%0A%3FidUnidadMedidaFK%0A%3FcbcmFK%0A%3FidVinculacionFK%0A%3FidPresentacionFK%0A%3FidIndicacionesFK%0A%3FnoGrupoTerapeuticoFK%0A%0A%0Awhere+%7B%0A%3Fmedicamento++rdf%3Atype+++ab%3Amedicamento+%3B%0A%23primary+key%0Aab%3Amedicamento.codigo++%3Fcodigo+%3B%0A++++%0A%23atributos%0Aab%3Amedicamento.nombreGenerico++%3FnombreGenerico+%3B+%0Aab%3Amedicamento.concentracion+%3Fconcentracion%3B%0Aab%3Amedicamento.unidadesPorEnvase+%3FunidadesPorEnvase%3B%0Aab%3Amedicamento.tipoMedicamento++%3FtipoMedicamento+%3B%0Aab%3Amedicamento.nombreGenericoGeneral+%3FnombreGenericoGeneral%3B%0Aab%3Amedicamento.controlActualizaciones+%3FcontrolActualizaciones%3B+%0Aab%3Amedicamento.noActualizacion+%3FnoActualizacion%3B%0A++++%0A%23forey+keys%0Aab%3Amedicamento.idTratamiento++%3FidTratamientoFK+%3B%0Aab%3Amedicamento.idNivelAtencion+%3FidNivelAtencionFK%3B++%0Aab%3Amedicamento.cabm+%3FcabmFK%3B%0Aab%3Amedicamento.tipoARV++%3FtipoARVFK%3B%0Aab%3Amedicamento.subclave+%3FsubclaveFK%3B++++%0Aab%3Amedicamento.idTipoPaciente+%3FidTipoPacienteFK%3B+%0Aab%3Amedicamento.idFormaFarmaceutica+%3FidFormaFarmaceuticaFK%3B++++++%0Aab%3Amedicamento.idUnidadMedida+%3FidUnidadMedidaFK%3B%0Aab%3Amedicamento.cbcm+++%3FcbcmFK%3B++++%0Aab%3Amedicamento.idVinculacion+%3FidVinculacionFK%3B++++%0Aab%3Amedicamento.idPresentacion++%3FidPresentacionFK%3B+%0Aab%3Amedicamento.idIndicaciones++%3FidIndicacionesFK%3B%0Aab%3Amedicamento.noGrupoTerapeutico++%3FnoGrupoTerapeuticoFK.%0A++%0A%23tables+foraneas%0A%3Ftratamiento++++ab%3Atratamiento.idTratamiento+%3FidTratamientoFK+.%0A%3Ftratamiento+++rdf%3Atype+++ab%3Atratamiento+.%0A%3Ftratamiento++++ab%3Atratamiento.principalIndicacion+%3FprincipalIndicacion++.%0A%3Ftratamiento++++ab%3Atratamiento.contraIndicaciones+++%3FcontraIndicaciones+.++%0A+%3Ftratamiento++++ab%3Atratamiento.demasIndicacion+++%3FdemasIndicacion+.++%0A++%0A%3FgrupoTerapeutico+ab%3Agrupoterapeutico.noGrupoTerapeutico+%3FnoGrupoTerapeuticoFK+.%0A%3FgrupoTerapeutico++rdf%3Atype+ab%3Agrupoterapeutico+.%0A%3FgrupoTerapeutico+ab%3Agrupoterapeutico.GrupoTerapeutico++%3FGrupoTerapeutico+.%0A++%0A%3Fnivelatencion++ab%3Anivelatencion.idNivelAtencion+%3FidNivelAtencionFK+.%0A%3Fnivelatencion+++rdf%3Atype+ab%3Anivelatencion+%3B%0Aab%3Anivelatencion.nivelAtencion+%3FnivelAtencion+.%0A++%0A%3FtipoPaciente_+ab%3Atipopaciente.idTipoPaciente+%3FidTipoPacienteFK+.%0A%3FtipoPaciente_+rdf%3Atype+ab%3Atipopaciente+%3B%0Aab%3Atipopaciente.tipoPaciente+%3FtipoPaciente+.%0A++%0A%3FformaFarmaceutica_++ab%3Aformafarmaceutica.idFormaFarmaceutica+%3FidFormaFarmaceuticaFK+.%0A%3FformaFarmaceutica_+rdf%3Atype+ab%3Aformafarmaceutica+%3B%0Aab%3Aformafarmaceutica.formaFarmaceutica+%3FformaFarmaceutica+.%0A++%0A%3Funidadmedica+ab%3Aunidadmedida.idUnidadMedida+%3FidUnidadMedidaFK+.%0A%3Funidadmedica+rdf%3Atype+ab%3Aunidadmedida+%3B%0Aab%3Aunidadmedida.unidadMedida+%3FunidadMedida+.%0A++%0A%3FcbcmIndividual++ab%3Acbcm.cbcm++%3FcbcmFK+.%0A%3FcbcmIndividual+++rdf%3Atype+ab%3Acbcm+%3B%0Aab%3Acbcm.cbcm++%3Fcbcm+.%0A++%0A%3Fvinculacion+ab%3Avinculacion.idVinculacion+%3FidVinculacionFK+.%0A%3Fvinculacion+rdf%3Atype+ab%3Avinculacion+%3B%0Aab%3Avinculacion.vinculacionGuias+%3FvinculacionGuias+%3B%0Aab%3Avinculacion.vinculacionOMS+%3FvinculacionOMS+%3B%0Aab%3Avinculacion.vinculacionFPGC+%3FvinculacionFPGC+%3B%0Aab%3Avinculacion.vinculacionCAUSES+%3FvinculacionCAUSES+.%0A++%0A%3FpresentacionIndividual++ab%3Apresentacion.idPresentacion++%3FidPresentacionFK+.%0A%3FpresentacionIndividual+++rdf%3Atype+ab%3Apresentacion+%3B%0Aab%3Apresentacion.presentacion++%3Fpresentacion+.%0A++%0A%3Findicaciones++ab%3Aindicaciones.idIndicaciones++%3FidIndicacionesFK+.%0A%3Findicaciones+++rdf%3Atype+ab%3Aindicaciones+%3B%0Aab%3Aindicaciones.dosisDiaria++%3FdosisDiaria+.%0A++%0A%3FcabmIndividual+ab%3Acabm.cabm++%3FcabmFK+.%0A%3FcabmIndividual++rdf%3Atype+ab%3Acabm+%3B%0Aab%3Acabm.cabm+%3Fcabm%0A%23%3FARV_+ab%3Aarv.tipoARV+%3FtipoARVFK+.%0A%23%3FARV_+rdf%3Atype+ab%3Aarv+.%0A%23+%3FARV_+ab%3Aarv.arv+%3Farv+.%0A%7D%0Alimit+5000",
			reader: {
                type: 'json',
				rootProperty: 'results.bindings'
            }
        }
    });
    	
	// create the Grid, see Ext.
	var printvalue = function(value){
            return value === undefined ? "N/D" : value.value ;
          };
		  
    var LiveSearchGridPanelMedicamentos = Ext.create('Ext.grid.Panel', {
        store: storeMedicamentos,
        columnLines: true,
        columns: [
		{xtype: 'rownumberer'  , width : 50 },
 { text : 'Tipo Insumo', flex : 1, width : 120  ,  hidden : true, sortable : true, dataIndex: 'cbcm', renderer: printvalue },
 { text : 'No. Grupo terapéutico', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'noGrupoTerapeuticoFK', renderer: printvalue },
 { text : 'Grupo terapéutico', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'GrupoTerapeutico', renderer: printvalue },
 { text : 'Nivel Atención', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'nivelAtencion', renderer: printvalue },
 { text : 'Clave CBCM', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'cbcm', renderer: printvalue },
 { text : 'Subclave', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'codigo', renderer: printvalue },
 { text : 'Nombre Genérico', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'nombreGenerico', renderer: printvalue },
 { text : 'Forma Farmacéutica', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'formaFarmaceutica', renderer: printvalue },
 { text : 'Concentración', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'concentracion', renderer: printvalue },
 { text : 'Presentación', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'presentacion', renderer: printvalue },
 { text : 'Principal Indicación', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'principalIndicacion', renderer: printvalue },
 { text : 'Demásindicaciones', flex : 1, width : 120  ,  hidden : false, sortable : false, dataIndex: 'demasIndicacion', renderer: printvalue },
 { text : 'Contraindicaciones', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'contraIndicaciones', renderer: printvalue },
 { text : 'Unidad Medida', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'unidadMedida', renderer: printvalue },
 { text : 'Unidades Por Envase', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'unidadesPorEnvase', renderer: printvalue },
 { text : 'Dosis Diaria Definida', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'dosisDiaria', renderer: printvalue },
 { text : 'Clave CABM', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'cabm', renderer: printvalue },
 { text : 'Vinculacióna OMS', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'vinculacionOMS', renderer: printvalue },
 { text : 'Vinculacióna Guías', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'vinculacionGuias', renderer: printvalue },
 { text : 'Vinculacióna CAUSES', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'vinculacionCAUSES', renderer: printvalue },
 { text : 'Vinculacióna FPGC', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'vinculacionFPGC', renderer: printvalue },
 { text : 'ARV', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: '', renderer: printvalue },
 { text : 'Tipo Paciente', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'tipoPaciente', renderer: printvalue },
 { text : 'Tipo Medicamento', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'tipoMedicamento', renderer: printvalue },
 { text : 'NG general', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'nombreGenericoGeneral', renderer: printvalue },
 { text : 'Control Actualizaciones', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'controlActualizaciones', renderer: printvalue },
 { text : 'NoActualización', flex : 1, width : 120  ,  hidden : true, sortable : false, dataIndex: 'noActualizacion', renderer: printvalue }
  ],
        height: 500 ,
		forceFit: false,
        //autoHeight : true,
        width:  1150,
		title: 'Catalogo Maestro de Medicamentos',
		renderTo: document.body
    }); 
	
	LiveSearchGridPanelMedicamentos.store.load();
	//alert( store.getCount() );
    
});
