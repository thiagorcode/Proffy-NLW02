import React from 'react';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import './style.css'


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biográfia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Geográfia', label: 'Geográfia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Física', label: 'Física' },
              { value: 'Historia', label: 'História' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">
              + Novo horário
            </button>
          </legend>
          <div className="schedule-item">
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Filosofia', label: 'Filosofia' },
                { value: 'Geográfia', label: 'Geográfia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Inglês', label: 'Inglês' },
                { value: 'Física', label: 'Física' },
                { value: 'Historia', label: 'História' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input label="Das" name="from" type="time" />
            <Input label="Até" name="to" type="time" />
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}
export default TeacherForm;